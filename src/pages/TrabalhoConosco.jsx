import React, { useRef, useState } from "react";
import { Users, Award, TrendingUp, Heart, Upload, Send } from "lucide-react";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textearea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/Select";
import homeSecond from "../assets/home-second.jpeg";
import { sendCareerForm } from "../services/mail";
import "../styles/TrabalhoConosco.css";

const initialFormData = {
  nome: "",
  email: "",
  telefone: "",
  area: "",
  experiencia: "",
  apresentacao: ""
};

const allowedCurriculumTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];

function mapCareerPayload(formData) {
  return {
    name: formData.nome.trim(),
    email: formData.email.trim(),
    phone: formData.telefone.trim(),
    categoriaVeiculo: formData.area.trim(),
    experiencia: formData.experiencia.trim(),
    apresentacao: formData.apresentacao.trim()
  };
}

export default function TrabalhoConosco() {
  const [formData, setFormData] = useState(initialFormData);
  const [curriculo, setCurriculo] = useState(null);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });
    setIsSubmitting(true);

    try {
      await sendCareerForm(mapCareerPayload(formData), curriculo);
      setFormData(initialFormData);
      setCurriculo(null);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setStatus({ type: "success", message: "Cadastro enviado com sucesso. Em breve entraremos em contato." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Não foi possível enviar o cadastro."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((current) => ({
      ...current,
      [e.target.name]: e.target.value
    }));
  };

  const handleAreaChange = (value) => {
    setFormData((current) => ({
      ...current,
      area: value
    }));
  };

  const handleFileButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const nextFile = e.target.files?.[0] ?? null;

    if (!nextFile) {
      setCurriculo(null);
      setStatus((current) => (current.type === "error" ? { type: "idle", message: "" } : current));
      return;
    }

    const extension = nextFile.name.split(".").pop()?.toLowerCase() ?? "";
    const hasValidExtension = ["pdf", "doc", "docx"].includes(extension);
    const hasValidType = !nextFile.type || allowedCurriculumTypes.includes(nextFile.type);

    if (!hasValidExtension || !hasValidType) {
      e.target.value = "";
      setCurriculo(null);
      setStatus({ type: "error", message: "Envie um currículo em PDF, DOC ou DOCX." });
      return;
    }

    if (nextFile.size > 5 * 1024 * 1024) {
      e.target.value = "";
      setCurriculo(null);
      setStatus({ type: "error", message: "O currículo deve ter no máximo 5MB." });
      return;
    }

    setCurriculo(nextFile);
    setStatus((current) => (current.type === "error" ? { type: "idle", message: "" } : current));
  };

  const benefits = [
    {
      icon: <Award className="benefit-icon blue-icon" />,
      title: "Plano de Carreira",
      description: "Crescimento profissional estruturado com metas claras e oportunidades de evolução."
    },
    {
      icon: <Heart className="benefit-icon red-icon" />,
      title: "Benefícios Completos",
      description: "Plano de saúde, odontológico, vale refeição, transporte e muito mais."
    },
    {
      icon: <TrendingUp className="benefit-icon green-icon" />,
      title: "Capacitação Contínua",
      description: "Investimento em treinamentos, cursos e certificações para desenvolvimento profissional."
    },
    {
      icon: <Users className="benefit-icon purple-icon" />,
      title: "Ambiente Colaborativo",
      description: "Equipe unida, ambiente respeitoso e cultura organizacional baseada em valores sólidos."
    }
  ];

  const areas = [
    "Motorista Carreteiro",
    "Motorista Truck",
    "Motorista Toco",
    "Motorista VUC",
    "Agregado",
    "Outros"
  ];

  return (
    <>
      <style>{`
        .hero-vagas-btn {
          width: auto !important;
          flex-grow: 0 !important;
          display: inline-flex !important;
          min-width: 200px;
        }
      `}</style>
      <Topbar />
      <HomeHeader />
      <div className="min-h-screen">
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Trabalhe Conosco</h1>
              <p className="hero-subtitle">
                Faça parte de uma equipe que move o Brasil. Juntos construímos o futuro do transporte e logística.
              </p>
              <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center" }}>
                <Button
                  onClick={() => window.open("https://ats.abler.com.br/jobs/5375", "_blank")}
                  className="hero-vagas-btn"
                  style={{ backgroundColor: "#fff", color: "#002d72", fontWeight: "bold", padding: "0.75rem 2rem" }}
                >
                  Ver Vagas Disponíveis
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="container">
            <h2 className="benefits-title">Por que trabalhar na SVD?</h2>
            <div className="benefits-grid">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="benefit-card benefit-card-wide">
                  <CardContent className="benefit-card-content">
                    <div className="benefit-icon-wrapper" style={{ marginTop: "2rem" }}>
                      {benefit.icon}
                    </div>
                    <h3 className="benefit-item-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="culture-section">
          <div className="container">
            <div className="culture-grid">
              <div>
                <h2 className="culture-title">Nossa Cultura Organizacional</h2>
                <p className="culture-description">
                  Na SVD Transportes, acreditamos que pessoas felizes e motivadas são a chave do nosso sucesso.
                  Cultivamos um ambiente de trabalho baseado em respeito mútuo, crescimento conjunto e inovação constante.
                </p>
                <div className="culture-points">
                  <div className="culture-point-item">
                    <div className="culture-point-bullet blue-bullet"></div>
                    <span className="culture-point-text">Respeito e Diversidade</span>
                  </div>
                  <div className="culture-point-item">
                    <div className="culture-point-bullet red-bullet"></div>
                    <span className="culture-point-text">Inovação e Excelência</span>
                  </div>
                  <div className="culture-point-item">
                    <div className="culture-point-bullet green-bullet"></div>
                    <span className="culture-point-text">Sustentabilidade e Responsabilidade</span>
                  </div>
                  <div className="culture-point-item">
                    <div className="culture-point-bullet orange-bullet"></div>
                    <span className="culture-point-text">Crescimento e Desenvolvimento</span>
                  </div>
                </div>
              </div>
              <div className="culture-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                  alt="Equipe trabalhando"
                  className="culture-image"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="application-form-section">
          <div className="container">
            <div className="application-form-wrapper">
              <h2 className="form-title-main">Seja um Motorista Agregado (MEI)</h2>
              <p className="form-subtitle-main">
                Envie seus dados e currículo para fazer parte da nossa rede de parceiros logísticos.
              </p>

              <Card className="form-card">
                <CardHeader>
                  <CardTitle className="form-card-title">Cadastro de Motorista MEI</CardTitle>
                  <p className="form-card-subtitle">Preencha as informações abaixo para análise</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="form-space">
                    <div className="form-grid">
                      <div>
                        <label className="form-label">Nome Completo *</label>
                        <Input
                          name="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-grid">
                      <div>
                        <label className="form-label">Telefone *</label>
                        <Input
                          name="telefone"
                          value={formData.telefone}
                          onChange={handleChange}
                          placeholder="(11) 99999-9999"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Categoria do Veículo *</label>
                        <Select value={formData.area} onValueChange={handleAreaChange} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            {areas.map((area) => (
                              <SelectItem key={area} value={area}>
                                {area}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="form-label">Experiência Profissional *</label>
                      <Textarea
                        name="experiencia"
                        value={formData.experiencia}
                        onChange={handleChange}
                        placeholder="Descreva sua experiência profissional relevante..."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label">Apresentação Pessoal *</label>
                      <Textarea
                        name="apresentacao"
                        value={formData.apresentacao}
                        onChange={handleChange}
                        placeholder="Conte um pouco sobre você, seus objetivos e por que quer trabalhar na SVD..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="upload-box">
                      <Upload className="upload-icon" />
                      <h4 className="upload-title">Anexar Currículo</h4>
                      <p className="upload-info">Formatos aceitos: PDF, DOC, DOCX (máx. 5MB)</p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="upload-input"
                      />
                      <Button type="button" variant="outline" onClick={handleFileButtonClick}>
                        Selecionar Arquivo
                      </Button>
                      {curriculo ? <p className="upload-file-name">{curriculo.name}</p> : null}
                    </div>

                    {status.message ? (
                      <p className={`form-feedback form-feedback-${status.type === "success" ? "success" : "error"}`}>
                        {status.message}
                      </p>
                    ) : null}

                    <Button type="submit" className="submit-button" disabled={isSubmitting}>
                      <Send className="send-icon" />
                      {isSubmitting ? "Enviando..." : "Enviar Cadastro"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}
