import React from "react";
import { Users, Award, Target, History, TrendingUp, Shield, Heart, MapPin } from "lucide-react";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import TimelineCarousel from "../components/TimelineCarousel";
import homeSecond from "../assets/home-second.jpeg";
import ppImg from "../assets/logos/pp.png";
import cert9001 from "../assets/certificados/conformidade1.png";
import cert14001 from "../assets/certificados/conformidade2.png";
import cert39001 from "../assets/certificados/conformidade3.png";
import ods from "../assets/service-item/ods.png";
import aeo from "../assets/certificados/aeo.png";
import "../styles/Sobre.css";

export default function QuemSomos() {
  const values = [
    {
      icon: <Target className="sobre-icon" />,
      title: "Missão",
      description: "No Grupo SVD, transformamos cada rota em uma jornada de sustentabilidade, segurança e excelência, oferecendo soluções logísticas personalizadas que impulsionam o crescimento e inspiram a confiança de nossos clientes e colaboradores.",
      color: "sobre-pilar-bg-blue"
    },
    {
      icon: <Award className="sobre-icon" />,
      title: "Visão",
      description: "Ser referência em soluções logísticas sustentáveis no Brasil e no Mercosul, promovendo inovação, respeito e valorização do capital humano estrutural.",
      color: "sobre-pilar-bg-green"
    },
    {
      icon: <Shield className="sobre-icon" />,
      title: "Valores",
      description: (
        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", textAlign: "left" }}>
          <li>Respeito</li>
          <li>Foco no Cliente</li>
          <li>Segurança</li>
          <li>Ética & Responsabilidade Sócio Ambiental</li>
        </ul>
      ),
      color: "sobre-pilar-bg-purple"
    },
    {
      icon: <Heart className="sobre-icon" />,
      title: "Propósito",
      description: "Entregar soluções sustentáveis com segurança, respeito às pessoas e ao meio ambiente, fazendo a diferença com qualidade, promovendo a inovação e a responsabilidade social.",
      color: "sobre-pilar-bg-blue"
    }
  ];

  const leadership = [
    {
      name: "Carlos Silva",
      position: "CEO & Fundador",
      experience: "25+ anos no setor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Ana Santos",
      position: "Diretora de Operações",
      experience: "20+ anos em logística",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Roberto Lima",
      position: "Diretor Comercial",
      experience: "18+ anos em vendas",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    }
  ];

  const stats = [
    { number: "25", label: "Anos de Experiência", suffix: "" },
    { number: "500", label: "Colaboradores", suffix: "+" },
    { number: "10000", label: "Clientes Atendidos", suffix: "+" },
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="sobre-root">
        {/* Hero Section */}
        <section
          className="sobre-hero"
          style={{
            background: `linear-gradient(rgba(34, 52, 110, 0.82), rgba(34, 52, 110, 0.82)), url(${homeSecond}) center center/cover no-repeat`
          }}
        >
          <div className="sobre-hero-container">
            <div className="sobre-hero-text">
              <h1 className="sobre-hero-title">Quem Somos</h1>
              <p className="sobre-hero-subtitle">
                Construindo pontes entre destinos há mais de duas décadas
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História com Timeline Moderna */}
        <section className="sobre-historia">
          <div className="sobre-historia-container">
            <h2 className="sobre-historia-title">Nossa História</h2>
            <TimelineCarousel />
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="sobre-pilares">
          <div className="sobre-pilares-container">
            <h2 className="sobre-pilares-title">Nossos Pilares</h2>
            <div className="sobre-pilares-grid">
              {values.map((value, index) => (
                <div key={index} className={`sobre-pilar-card ${value.color}`}>
                  <div className="sobre-pilar-card-header">
                    <div className="sobre-pilar-icon-bg">
                      {value.icon}
                    </div>
                    <h3 className="sobre-pilar-title">{value.title}</h3>
                  </div>
                  <div className="sobre-pilar-content">
                    <div className="sobre-pilar-desc">
                      {value.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ODS Section */}
        <section className="sobre-ods" style={{ padding: "5rem 0", backgroundColor: "#f8fafc" }}>
          <div className="container">
            <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
              <h2 className="sobre-historia-title" style={{ marginBottom: "2rem" }}>ODS: Objetivos de Desenvolvimento Sustentável</h2>
              
              <p style={{ fontSize: "1.125rem", lineHeight: "1.8", color: "#374151", marginBottom: "1.5rem" }}>
                Os Objetivos de Desenvolvimento Sustentável são um conjunto de metas globais
                criadas pela ONU para promover o desenvolvimento econômico, social e ambiental de
                forma equilibrada, garantindo qualidade de vida para as pessoas hoje sem
                comprometer as futuras gerações.
              </p>
              
              <p style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#15803d", marginBottom: "3rem" }}>
                São 17 Objetivos no total e 3 foram escolhidos pela SVD como foco principal.
              </p>

              <div style={{ 
                width: "100%", 
                height: "auto", 
                minHeight: "300px",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden"
              }}>
                 <img src={ods} alt="ods" className="ods-image" />
              </div>
            </div>
          </div>
        </section>

        {/* Política Integrada e Certificações */}
        <section className="sobre-certificacoes">
          <div className="sobre-historia-container">
            {/* Política Integrada */}
            <div className="sobre-cert-bloco">
              <h2 className="sobre-lideranca-title">Política Integrada (SGI)</h2>
              <p className="sobre-cert-texto">
                A SVD presta Serviço Logístico de Transporte e Armazenagem para a indústria automotiva e agrícola, visando atender as necessidades dos clientes através da melhoria contínua do SGI (Sistema de Gestão Integrada), atendendo os requisitos legais e outros requisitos, comprometendo-se com a segurança viária e a redução da poluição.
              </p>
            </div>

            {/* Seção OEA */}
            <div className="home-certifications__container home-certifications__container--oea">
              <div className="home-certifications__image-content">
                <img src={aeo} alt="Selo Operador Econômico Autorizado (OEA)" className="home-certifications__oea-img" />
              </div>
              <div className="home-certifications__text-content">
                <h2 className="home-certifications__title">OEA – Operador Econômico Autorizado</h2>
                <p className="home-certifications__description">
                  <strong>Segurança e agilidade no comércio internacional</strong>
                </p>
                <p className="home-certifications__description">
                  O Grupo SVD é certificado como Operador Econômico Autorizado (OEA), um selo de confiança da Receita Federal que reconhece empresas que cumprem rigorosos critérios de segurança da cadeia logística e conformidade aduaneira. Essa certificação nos posiciona como um parceiro estratégico no comércio exterior, garantindo processos de importação e exportação mais ágeis, seguros e com menos burocracia para nossos clientes.
                </p>
              </div>
            </div>

            {/* Certificações ISO */}
            <div className="home-certifications__container">
              <div className="home-certifications__text-content">
                <h2 className="home-certifications__title">Certificações ISO</h2>
                <p className="home-certifications__description">
                  A SVD Transportes é sinônimo de qualidade, segurança e sustentabilidade, refletidos nas certificações que orgulhosamente ostentamos:
                </p>
                <ul className="home-certifications__list">
                  <li><p><strong>ISO 9001 – Gestão da Qualidade:</strong> Certificação internacional que garante a excelência na gestão da qualidade, assegurando processos padronizados, melhoria contínua e alto nível de eficiência nos serviços prestados.</p></li>
                  <li><p><strong>ISO 14001 – Gestão Ambiental:</strong> Reforça o compromisso do Grupo SVD com a sustentabilidade e a gestão ambiental responsável, promovendo práticas que reduzem impactos ao meio ambiente e incentivam o uso consciente de recursos.</p></li>
                  <li><p><strong>ISO 39001 – Segurança Viária:</strong> Norma internacional voltada à segurança no transporte rodoviário, que estabelece diretrizes para reduzir riscos, prevenir acidentes e garantir operações logísticas mais seguras para colaboradores, clientes e para a sociedade.</p></li>
                </ul>
              </div>
              <div className="home-certifications__image-content">
                <div className="certificate-images">
                  <img src={cert9001} alt="Certificado ISO 9001" className="certificate-image" />
                  <img src={cert14001} alt="Certificado ISO 14001" className="certificate-image" />
                  <img src={cert39001} alt="Certificado ISO 39001" className="certificate-image" />
                </div>
              </div>
            </div>

            {/* Escopo de Certificação */}
            <div className="sobre-cert-bloco" style={{ marginTop: '4rem' }}>
              <h2 className="home-certifications__title">Escopo de Certificação</h2>
              <p className="sobre-cert-texto" style={{ marginBottom: '2.5rem' }}>
                Prestação de serviços logísticos de transporte e armazenagem para indústria automotiva e agrícola com atuação na América Latina.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
                  <div style={{ backgroundColor: '#e0e7ff', padding: '0.75rem', borderRadius: '10px', height: 'fit-content' }}>
                    <MapPin size={24} style={{ color: '#002d72' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.25rem', fontSize: '1.1rem' }}>Matriz</h4>
                    <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Rua Lodovico Kaminski, 880 - Curitiba/PR</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
                  <div style={{ backgroundColor: '#e0e7ff', padding: '0.75rem', borderRadius: '10px', height: 'fit-content' }}>
                    <MapPin size={24} style={{ color: '#002d72' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.25rem', fontSize: '1.1rem' }}>Filial</h4>
                    <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Rua Edmundo Eckstein, 888 - Curitiba/PR</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' }}>
                  <div style={{ backgroundColor: '#e0e7ff', padding: '0.75rem', borderRadius: '10px', height: 'fit-content' }}>
                    <MapPin size={24} style={{ color: '#002d72' }} />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 'bold', color: '#1e293b', marginBottom: '0.25rem', fontSize: '1.1rem' }}>Filial</h4>
                    <p style={{ color: '#64748b', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>Rua Engenheiro Júlio Cesar de Souza Araújo, 181 – Curitiba/PR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="sobre-stats">
          <div className="sobre-stats-container">
            <h2 className="sobre-stats-title">Nossos Números</h2>
            <div className="sobre-stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="sobre-stat-card">
                  <div className="sobre-stat-number">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="sobre-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Liderança */}
        {/*
          <section className="sobre-lideranca">
            <div className="sobre-lideranca-container">
              <h2 className="sobre-lideranca-title">Nossa Liderança</h2>
              <div className="sobre-lideranca-grid">
                {leadership.map((leader, index) => (
                  <div key={index} className="sobre-lider-card">
                    <div className="sobre-lider-img-wrap">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="sobre-lider-img"
                      />
                    </div>
                    <div className="sobre-lider-content">
                      <h3 className="sobre-lider-nome">{leader.name}</h3>
                      <p className="sobre-lider-cargo">{leader.position}</p>
                      <p className="sobre-lider-exp">{leader.experience}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        */}

        {/* Apoio Social */}
        <section className="sobre-social" style={{ padding: '4rem 0', backgroundColor: '#fff', textAlign: 'center' }}>
          <div className="container">
            <h2 className="sobre-lideranca-title" style={{ marginBottom: '2rem' }}>Compromisso Social</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
              <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem', color: '#4b5563', lineHeight: '1.6' }}>
                Além de conectar destinos, conectamos propósitos. A SVD é uma empresa parceira do <strong>Hospital Pequeno Príncipe</strong>, apoiando a causa da saúde infantojuvenil no Brasil.
              </p>
              <img 
                src={ppImg} 
                alt="Selo Nós Apoiamos - Hospital Pequeno Príncipe" 
                style={{ maxWidth: '200px', height: 'auto' }} 
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sobre-cta">
          <div className="sobre-cta-container">
            <div className="sobre-cta-text">
              <h2 className="sobre-cta-title">
                Venha Fazer Parte da Nossa História
              </h2>
              <p className="sobre-cta-subtitle">
                Junte-se a nós nesta jornada de crescimento e inovação no setor de transporte e logística.
              </p>
              <div className="sobre-cta-btns">
                <button 
                  className="sobre-btn sobre-btn-primary"
                  onClick={() => window.open('https://ats.abler.com.br/jobs/5375', '_blank')}
                >
                  Trabalhe Conosco
                </button>
                <button className="sobre-btn sobre-btn-outline">
                  Entre em Contato
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <HomeFooter />
    </>
  );
}