import React from "react";
import { Cookie, Settings, CheckCircle, BarChart2 } from "lucide-react";
import "../styles/PrivacidadeCookies.css";

export default function PrivacidadeCookies() {
  const cookieTypes = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Cookies Essenciais",
      description: "Necessários para o funcionamento básico do site, como navegação e acesso a áreas seguras. Não podem ser desativados.",
      enabled: true,
      disabled: true,
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-blue-600" />,
      title: "Cookies de Desempenho e Análise",
      description: "Coletam informações anônimas sobre como os visitantes usam o site, ajudando-nos a melhorar a performance e a experiência do usuário.",
      enabled: true,
      disabled: false,
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-600" />,
      title: "Cookies de Funcionalidade",
      description: "Lembram suas preferências e escolhas (como idioma ou região) para fornecer uma experiência mais personalizada.",
      enabled: true,
      disabled: false,
    },
  ];

  return (
    <div className="cookies-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute-overlay"></div>
        <div className="container hero-container">
          <div className="text-center text-white">
            <h1 className="hero-title">Política de Cookies</h1>
            <p className="hero-subtitle">
              Entenda como utilizamos cookies para aprimorar sua experiência em nosso site
            </p>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="intro-section">
        <div className="container intro-container">
          <div className="card-container">
            <div className="card-header-custom">
              <div className="card-title-custom">
                <Cookie className="icon" /> O que são Cookies?
              </div>
            </div>
            <div className="card-content-custom">
              <p>
                Cookies são pequenos arquivos de texto que os sites que você visita colocam no seu computador.
                Eles são amplamente utilizados para fazer os sites funcionarem, ou funcionarem de forma mais eficiente,
                bem como para fornecer informações aos proprietários do site.
              </p>
              <p>
                Na SVD Transportes, usamos cookies para entender como nosso site é usado, para personalizar sua experiência
                e para garantir que nosso conteúdo seja relevante para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Cookies */}
      <section className="cookie-types-section">
        <div className="container cookie-types-container">
          <h2 className="cookie-types-title">Tipos de Cookies que Utilizamos</h2>
          <div className="grid-container">
            {cookieTypes.map((cookie, index) => (
              <div key={index} className="cookie-card">
                <div className="card-header-custom">
                  <div className="card-title-cookie-type">
                    {cookie.icon}
                    <span>{cookie.title}</span>
                  </div>
                </div>
                <div className="card-content-custom">
                  <p className="cookie-description">{cookie.description}</p>
                  <div className="cookie-switch-container">
                    <span className="switch-text">Ativado</span>
                    <Switch defaultChecked={cookie.enabled} disabled={cookie.disabled} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gerenciamento de Cookies */}
      <section className="management-section">
        <div className="container management-container">
          <div className="card-container">
            <div className="card-header-custom">
              <div className="card-title-custom">
                <Settings className="icon" /> Gerencie suas Preferências
              </div>
            </div>
            <div className="card-content-custom">
              <p>
                Você pode controlar e/ou excluir cookies como desejar. Para mais detalhes, consulte aboutcookies.org.
                Você pode excluir todos os cookies que já estão no seu computador e pode configurar a maioria dos navegadores para impedir que eles sejam colocados.
                Se você fizer isso, no entanto, talvez tenha que ajustar manualmente algumas preferências sempre que visitar um site, e alguns serviços e funcionalidades podem não funcionar.
              </p>
              <div className="button-group">
                <Button className="accept-button">Aceitar Todos</Button>
                <Button variant="outline" className="save-button">Salvar Preferências</Button>
                <Button variant="ghost" className="reject-button">Rejeitar Opcionais</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// O componente Switch e Button não foram fornecidos, então vamos simular para fins de exemplo
// Em uma aplicação real, você importaria de uma biblioteca como shadcn/ui
const Button = ({ children, className, variant, ...props }) => (
  <button className={`btn ${variant} ${className}`} {...props}>
    {children}
  </button>
);

const Switch = ({ defaultChecked, disabled }) => (
  <label className="switch">
    <input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
    <span className="slider round"></span>
  </label>
);
