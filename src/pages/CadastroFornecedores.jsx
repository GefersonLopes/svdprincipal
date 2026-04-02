import React, { useState } from "react";
import { Briefcase, Download, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textearea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import manualFornecedorPDF from "../assets/documentos/Manual-fornecedores2.pdf";
import "../styles/CadastroFornecedores.css";

export default function CadastroFornecedores() {
  const [formData, setFormData] = useState({
    razaoSocial: "",
    cnpj: "",
    nomeFantasia: "",
    telefone: "",
    email: "",
    areaAtuacao: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = "Novo Cadastro de Fornecedor - Site SVD";
    const body = `Razão Social: ${formData.razaoSocial}\r\nCNPJ: ${formData.cnpj}\r\nNome Fantasia: ${formData.nomeFantasia}\r\nTelefone: ${formData.telefone}\r\nE-mail: ${formData.email}\r\nÁrea de Atuação: ${formData.areaAtuacao}\r\nMensagem: ${formData.mensagem}`;
    window.location.href = `mailto:jaqueline.faveri@gruposvd.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="cadastroforn-root">
        {/* Hero Section */}
        <section className="cadastroforn-hero">
          <div className="cadastroforn-hero-bg"></div>
          <div className="cadastroforn-hero-content">
            <Briefcase className="cadastroforn-hero-icon" />
            <h1 className="cadastroforn-hero-title">
              <span className="cadastroforn-hero-title-gradient">
                Cadastro de Fornecedores
              </span>
            </h1>
            <p className="cadastroforn-hero-desc">
              Junte-se à nossa rede de parceiros e cresça conosco.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="cadastroforn-form-section">
          <div className="cadastroforn-container">
            
            {/* Card de Download do Documento */}
            <Card className="cadastroforn-card" style={{ marginBottom: '2rem' }}>
              <CardHeader>
                <CardTitle className="cadastroforn-form-title">Documentação Obrigatória</CardTitle>
                <p className="cadastroforn-form-desc">
                  Antes de preencher o formulário, faça o download do Manual de Homologação e leia atentamente os requisitos.
                </p>
              </CardHeader>
              <CardContent>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', flexWrap: 'wrap' }}>
                  <FileText size={32} style={{ color: '#002d72' }} />
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.25rem' }}>Manual de Conduta e Homologação</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>PDF - Leitura Obrigatória</p>
                  </div>
                  <Button variant="outline" onClick={() => window.open(manualFornecedorPDF, '_blank')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Download size={18} />
                    ㅤBaixar Documento
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="cadastroforn-card">
              <CardHeader>
                <CardTitle className="cadastroforn-form-title">Seja nosso parceiro</CardTitle>
                <p className="cadastroforn-form-desc">
                  Preencha o formulário para iniciar o processo de homologação.
                </p>
              </CardHeader>
              <CardContent>
                <form className="cadastroforn-form" onSubmit={handleSubmit}>
                  <div className="cadastroforn-form-block">
                    <h3 className="cadastroforn-form-block-title">Informações da Empresa</h3>
                  </div>
                  <div className="cadastroforn-form-grid">
                    <div>
                      <label className="cadastroforn-label">Razão Social *</label>
                      <Input name="razaoSocial" value={formData.razaoSocial} onChange={handleChange} placeholder="Nome completo da sua empresa" required />
                    </div>
                    <div>
                      <label className="cadastroforn-label">CNPJ *</label>
                      <Input name="cnpj" value={formData.cnpj} onChange={handleChange} placeholder="00.000.000/0000-00" required />
                    </div>
                    <div>
                      <label className="cadastroforn-label">Nome Fantasia</label>
                      <Input name="nomeFantasia" value={formData.nomeFantasia} onChange={handleChange} placeholder="Nome fantasia" />
                    </div>
                    <div>
                      <label className="cadastroforn-label">Telefone</label>
                      <Input name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="cadastroforn-label">E-mail *</label>
                      <Input name="email" value={formData.email} onChange={handleChange} placeholder="contato@empresa.com.br" required />
                    </div>
                    <div>
                      <label className="cadastroforn-label">Área de Atuação *</label>
                      <Select value={formData.areaAtuacao} onValueChange={(val) => setFormData(prev => ({ ...prev, areaAtuacao: val }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="transporte">Transporte</SelectItem>
                          <SelectItem value="logistica">Logística</SelectItem>
                          <SelectItem value="implementos">Implementos</SelectItem>
                          <SelectItem value="servicos">Serviços</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="cadastroforn-label">Mensagem</label>
                    <Textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Conte um pouco sobre sua empresa, diferenciais, etc." rows={4} />
                  </div>
                  <div className="cadastroforn-btn-wrap">
                    <Button className="cadastroforn-btn" type="submit">
                      Enviar Cadastro
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}