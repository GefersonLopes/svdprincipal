import React from "react";
import { Leaf, Recycle, TreePine, Users, Target, Award, ShieldAlert, CheckCircle, Shield, BarChart3, HeartHandshake } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/Card";
import { Button } from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import sustentabilidadeBg from "../assets/sustentabilidade.jpg";
import ppImg from "../assets/logos/pp.png";
import rotaLogo from "../assets/logos/rota.png";
import despoluirLogo from "../assets/logos/LogoDespoluir.svg";
import "../styles/Sustentabilidade.css";

export default function Sustentabilidade() {
  const initiatives = [
    {
      icon: <Leaf className="icon-leaf" />,
      title: "Frota Eco-Eficiente",
      description: "Nossa frota é 100% Euro 6 e investimos em combustíveis alternativos para reduzir emissões de CO2.",
      metrics: "45% menos emissões"
    },
    {
      icon: <Recycle className="icon-recycle" />,
      title: "Economia Circular",
      description: "Programa de reciclagem e reutilização de materiais, reduzindo desperdícios operacionais.",
      metrics: "85% materiais reciclados"
    },
    {
      icon: <Users className="icon-users" />,
      title: "Impacto Social",
      description: "Programas de capacitação profissional e desenvolvimento das comunidades locais.",
      metrics: "500+ pessoas capacitadas"
    }
  ];

  const stats = [
    { number: 95, label: "Redução CO2", suffix: "%" },
    { number: 100, label: "Energia Renovável", suffix: "%" },
    { number: 15, label: "Certificações" },
    { number: 25, label: "Árvores Plantadas", suffix: "K" }
  ];

  const goals = [
    {
      title: "2025: Frota 100% Sustentável",
      description: "Conversão completa da frota para veículos híbridos e elétricos",
      year: "2025"
    },
    {
      title: "2027: Energia Limpa", 
      description: "100% da operação alimentada por energia solar e eólica",
      year: "2027"
    },
    {
      title: "2030: Impacto Positivo",
      description: "Geração de mais benefícios ambientais do que impactos negativos",
      year: "2030"
    }
  ];

  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="sustentabilidade-page">
        {/* Hero Section */}
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(18, 86, 6, 0.73), rgba(18, 86, 6, 0.73)), url(${sustentabilidadeBg}) center center/cover no-repeat`
          }}
        >
          {/* Animated background elements */}
          <div className="hero-background-animation">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="animated-dot"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
          <div className="container hero-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="text-white max-w-4xl">
              <h1 className="hero-title">
                Sustentabilidade
              </h1>
              <p className="hero-subtitle">
                Comprometidos com um futuro mais verde e sustentável para as próximas gerações
              </p>
            </div>
          </div>
        </section>

        {/* Estatísticas Animadas */}
        {/*<section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2500}
                      suffix={stat.suffix || ""}
                      className="animated-counter"
                    />
                  </div>
                  <div className="stat-label" style={{ color: "white" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* Compromisso Ambiental & SGI */}
        <section className="sgi-section" style={{ padding: '5rem 0', backgroundColor: '#fff' }}>
          <div className="container">
            {/* Compromisso Ambiental */}
            <div style={{ marginBottom: '4rem' }}>
              <h2 className="initiatives-title" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>Compromisso Ambiental</h2>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#374151' }}>
                <p style={{ marginBottom: '1rem' }}>
                  A SVD mantém um forte compromisso com a sustentabilidade e a preservação do meio ambiente. Por isso, trabalhamos exclusivamente com prestadores de serviço que atendem aos nossos requisitos ambientais, assegurando que todas as etapas de nossas operações sigam padrões responsáveis e em conformidade com as legislações vigentes.
                </p>
                <p>
                  Essa exigência faz parte da nossa Política de Sustentabilidade e do Sistema de Gestão Integrada (SGI), garantindo que nossos parceiros compartilhem dos mesmos valores em relação à gestão de resíduos, controle de emissões e uso consciente dos recursos naturais.
                  Dessa forma, fortalecemos uma cadeia logística mais limpa, ética e comprometida com o futuro do planeta.
                </p>
              </div>
            </div>

            {/* Sustentabilidade e Meio Ambiente */}
            <div>
              <h2 className="initiatives-title" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>Sustentabilidade e Meio Ambiente</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#374151', marginBottom: '2rem' }}>
                A SVD presta Serviço Logístico de Transporte e Armazenagem para a indústria automotiva, visando atender as necessidades dos clientes através da melhoria contínua do SGI, atendendo os requisitos legais e outros requisitos, comprometendo-se com a segurança viária e redução da poluição. Os objetivos do sistema de gestão integrada são:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <Card className="h-full">
                  <CardContent style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#15803d' }}>Objetivos do SGI</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        "Garantir a rentabilidade dos negócios e a excelência organizacional",
                        "Satisfazer os requisitos das partes interessadas",
                        "Melhorar o nível dos serviços oferecidos",
                        "Prevenir a poluição e proteger o meio-ambiente"
                      ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem', color: '#4b5563' }}>
                          <span style={{ color: '#15803d', marginRight: '0.5rem', fontWeight: 'bold' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="h-full">
                  <CardContent style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#15803d' }}>Medidas Adotadas</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {[
                        { title: "Frota sustentável", text: "Investindo em veículos mais eficientes, em termos de consumo de combustível, e em tecnologias capazes de reduzir as emissões de Gases do Efeito Estufa." },
                        { title: "Gestão inteligente de rotas", text: "Utilizando tecnologias de gerenciamento que otimizam rotas, diminuindo o consumo de combustível e minimizando as emissões de Gases do Efeito Estufa (GEE)." },
                        { title: "Treinamento e educação", text: "Capacitando os motoristas para adotarem práticas de condução econômica e segura." },
                        { title: "Manutenção Sustentável", text: "Com procedimentos que prolonguem a vida útil dos veículos." },
                        { title: "Inovação contínua", text: "Em tecnologia e logística para encontrar maneiras mais sustentáveis de atender às demandas dos clientes." }
                      ].map((item, i) => (
                        <li key={i} style={{ marginBottom: '1rem', color: '#4b5563' }}>
                          <strong style={{ color: '#15803d' }}>• {item.title}:</strong> {item.text}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Button 
                  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScM1RPbNbhVTrht5XBJWO6fY59U8Z9pWXejW-uB-DZBntIlFQ/viewform?pli=1", "_blank")}
                  style={{ backgroundColor: '#dc2626', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}
                >
                  <ShieldAlert size={20} />
                  Acessar Formulário de Reporte de Segurança
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Nossas Iniciativas */}
        <section className="initiatives-section">
          <div className="container">
            <h2 className="initiatives-title">
              Nossas Iniciativas
            </h2>
            <div className="initiatives-grid">
              {initiatives.map((initiative, index) => (
                <Card key={index} className="initiative-card">
                  <CardHeader className="initiative-card-header">
                    <div className="initiative-card-icon-container">
                      <div className="initiative-card-icon-wrapper">
                        {initiative.icon}
                      </div>
                      <div>
                        <CardTitle className="initiative-title">
                          {initiative.title}
                        </CardTitle>
                        <div className="initiative-metrics">
                          {initiative.metrics}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="initiative-description">
                      {initiative.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compromissos Ambientais */}
       {/*} <section className="commitments-section">
          <div className="container">
            <div className="commitments-grid">
              <div className="commitments-content-wrapper">
                <h2 className="commitments-title">
                  Nossos Compromissos
                </h2>
                <p className="commitments-description">
                  Assumimos responsabilidades concretas com o meio ambiente, estabelecendo metas ambiciosas 
                  e investindo em tecnologias limpas para construir um futuro sustentável.
                </p>
                <div className="commitments-list">
                  {[
                    { color: "color-emerald", text: "Certificação ISO 14001 - Gestão Ambiental" },
                    { color: "color-cyan", text: "Adesão ao Pacto Global da ONU" },
                    { color: "color-yellow", text: "Programa Carbon Free Platinum" },
                    { color: "color-purple", text: "Selo Verde do Transporte Sustentável" }
                  ].map((item, index) => (
                    <div key={index} className="commitment-item">
                      <div className={`commitment-dot ${item.color}`}></div>
                      <span className="commitment-text">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="commitments-image-wrapper">
                <div className="commitments-image-blur"></div>
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800" 
                  alt="Sustentabilidade"
                  className="commitments-image"
                />
              </div>
            </div>
          </div>
        </section>*/}

        {/* Apoio Hospital Pequeno Príncipe */}
        <section className="social-support-section" style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
              <h2 className="initiatives-title">Responsabilidade Socioambiental</h2>
              <div style={{ maxWidth: '800px', fontSize: '1.125rem', lineHeight: '1.8', color: '#374151', textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1.5rem', textAlign: 'center' }}>
                  SVD e Hospital Pequeno Príncipe: uma parceria que transforma vidas
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  A SVD acredita que responsabilidade social vai muito além das estradas. Ela começa dentro de casa, se estende aos nossos colaboradores e alcança a comunidade onde estamos inseridos. Por isso, temos orgulho em apoiar o Hospital Pequeno Príncipe, a maior instituição exclusivamente pediátrica do Brasil e referência nacional em saúde infantojuvenil.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Ao longo dos anos, acompanhamos de perto o trabalho sério, humano e incansável do hospital, que oferece tratamento de alta complexidade para crianças e adolescentes de todo o país. Apoiar essa causa é mais do que um gesto solidário: é um compromisso com o futuro, com a vida e com o cuidado às famílias brasileiras.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Na SVD, entendemos que nossos valores — ética, responsabilidade, empatia e propósito — se conectam diretamente com a missão do Pequeno Príncipe. Por isso, renovamos continuamente nosso esforço para contribuir com iniciativas que reforcem o atendimento, a pesquisa, a inovação e o acolhimento proporcionados pela instituição.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  Seguimos juntos, acreditando que cada ação faz diferença. E que quando empresas e comunidade se unem, multiplicamos esperança, saúde e oportunidades para quem mais precisa.
                </p>
                <p style={{ fontWeight: 'bold', textAlign: 'center', marginTop: '2rem', color: '#15803d' }}>SVD – Movendo sonhos, cuidando de vidas.</p>
              </div>
              <div style={{ padding: '1.5rem', background: 'white', borderRadius: '1rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <img 
                  src={ppImg} 
                  alt="Selo Nós Apoiamos - Hospital Pequeno Príncipe" 
                  style={{ maxWidth: '280px', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Rota Segura SVD */}
        <section className="rota-segura-section" style={{ padding: '5rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
                <h2 className="initiatives-title" style={{ margin: 0 }}>Rota Segura SVD</h2>
              </div>
              <h3 className="rota-segura-title-gradient">
                Segurança como valor inegociável nas estradas do Brasil e do Mercosul
              </h3>

              <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#cbd5e1', textAlign: 'center', marginBottom: '3rem' }}>
                <p>
                  No Grupo SVD, segurança não é apenas uma norma — é um compromisso diário com a vida. Pensando nisso, criamos o <strong>Rota Segura SVD</strong>, um programa interno de monitoramento, orientação e prevenção, voltado exclusivamente à segurança viária de nossas operações.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                {/* Card 1 */}
                <div className="rota-segura-card-dark">
                  <h4 className="rota-segura-card-title"><Shield className="text-emerald-400" /> O que é?</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Programa contínuo de excelência operacional e gestão de risco. Garante que todos os trajetos, do embarque à entrega, sigam padrões elevados de segurança, eficiência e cuidado com o condutor, o veículo e a carga.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="rota-segura-card-dark">
                  <h4 className="rota-segura-card-title"><Target className="text-cyan-400" /> Principais Ações</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li className="flex items-start gap-2"><span className="text-emerald-400"></span> Mapeamento de rotas e pontos críticos</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400"></span> Treinamentos de direção defensiva</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400"></span> Monitoramento via telemetria</li>
                    <li className="flex items-start gap-2"><span className="text-emerald-400"></span> Integração com Programa PAZ</li>
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="rota-segura-card-dark">
                  <h4 className="rota-segura-card-title"><Award className="text-yellow-400" /> Estratégia</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Integrado à nossa política ESG e certificações como a ISO 39001. O Rota Segura conecta-se aos treinamentos do programa Motorista Top Master e à atuação do Espaço do Cliente.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="rota-segura-card-dark">
                  <h4 className="rota-segura-card-title"><BarChart3 className="text-purple-400" /> Resultados</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Redução significativa nos índices de incidentes, aumento do engajamento dos motoristas e ganhos comprovados em eficiência de combustível e performance.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                <img src={rotaLogo} alt="Logo Rota Segura" style={{ maxWidth: '300px', height: 'auto' }} />
              </div>

              <div style={{ textAlign: 'center' }}>
                <p style={{ fontWeight: 'bold', color: '#34d399', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                  Mais do que números, o Rota Segura reforça nosso propósito: transportar sonhos com responsabilidade e respeito à vida.
                </p>
                <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>
                  Grupo SVD – Gestão, tecnologia e segurança unindo trajetos e transformando destinos.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Programa Despoluir */}
        <section className="despoluir-section" style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
          <div className="container">
            <h2 className="initiatives-title" style={{ marginBottom: '3rem', textAlign: 'center', color: '#1e3a8a' }}>Parceria com o Programa Despoluir</h2>
            
            <div className="despoluir-grid">
              <div style={{ fontSize: '1.125rem', lineHeight: '1.8', color: '#374151' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  A SVD Transportes é parceira do <strong>Programa Despoluir</strong> – iniciativa da CNT (Confederação Nacional do Transporte) e do SEST SENAT – que visa promover a sustentabilidade ambiental no setor de transporte e logística, por meio da redução de emissão de poluentes e da melhoria da eficiência energética da frota.
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  Como empresa comprometida com os princípios ESG (Ambiental, Social e Governança), a SVD Transportes tem mantido sua frota sob constante avaliação das equipes do Despoluir. Esse trabalho conjunto garante que nossos veículos operem dentro dos padrões ambientais exigidos, reforçando nosso papel como referência em logística sustentável no Brasil e no Mercosul.
                </p>
                
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#15803d', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle size={24}/> Resultados e benefícios:</h4>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                  {[
                    "Redução comprovada na emissão de poluentes",
                    "Melhoria contínua na eficiência e desempenho da frota",
                    "Treinamentos e conscientização para motoristas e equipes operacionais",
                    "Conformidade com normas ambientais nacionais e internacionais"
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.5rem', paddingLeft: '0.5rem', borderLeft: '3px solid #15803d' }}>
                      <span style={{ marginLeft: '0.5rem' }}>
                      {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p style={{ marginBottom: '1.5rem' }}>
                  A parceria com o Despoluir complementa outras iniciativas sustentáveis do Grupo SVD, como a renovação da frota com caminhões Euro 6 e a implementação do Rota Segura, ampliando nosso compromisso com um transporte mais seguro, inteligente e ambientalmente responsável.
                </p>
                
                <p style={{ fontWeight: 'bold', color: '#15803d', fontStyle: 'italic' }}>
                  Seguimos transportando sonhos com responsabilidade, respeito ao meio ambiente e excelência operacional.
                </p>
              </div>

              <div className="despoluir-logo-container">
                 <img 
                  src={despoluirLogo} 
                  alt="Selo Programa Despoluir" 
                  className="despoluir-logo-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Metas Futuras */}
        <section className="goals-section">
          <div className="container">
            <h2 className="goals-title">
              Roadmap de Sustentabilidade
            </h2>
            <div className="goals-list-container">
              {goals.map((goal, index) => (
                <Card key={index} className="goal-card">
                  <CardContent className="goal-card-content">
                    <div className="goal-item-wrapper">
                      <div className="goal-icon-wrapper">
                        <div className="goal-icon-bg">
                          <Target className="goal-icon" />
                        </div>
                      </div>
                      <div className="goal-content-wrapper">
                        <div className="goal-header">
                          <h3 className="goal-title-text">
                            {goal.title}
                          </h3>
                          <span className="goal-year-badge">
                            {goal.year}
                          </span>
                        </div>
                        <p className="goal-description">{goal.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reconhecimentos 
        <section className="awards-section">
          <div className="container">
            <h2 className="awards-title">
              Reconhecimentos
            </h2>
            <div className="awards-grid">
              {[1, 2, 3].map((award) => (
                <Card key={award} className="award-card">
                  <CardContent className="award-card-content">
                    <div className="award-icon-wrapper">
                      <Award className="award-icon" />
                    </div>
                    <h3 className="award-title">
                      Prêmio Sustentabilidade {2022 + award}
                    </h3>
                    <p className="award-description">
                      Reconhecimento nacional pela excelência em práticas sustentáveis no setor de transporte.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>*/}
      </div>
      <HomeFooter />
    </>
  );
}