import { useRef } from 'react';
import { Link } from 'react-router-dom';
import logoAzul from "../../assets/logo-branca.png";
import faleconosco from "../../assets/service-item/faleconosco.png";
import ouvidoria from "../../assets/service-item/helpdesk.png";
import trabalheconosco from "../../assets/service-item/trabalhe.png";
import motoristamei from "../../assets/service-item/iconfornecedor.png";
import areadocolaborador from "../../assets/service-item/team.png";
import transportes from "../../assets/logos/transportes-logo.png"
import acessorios from "../../assets/logos/acessorios-logo.png"
import seminovos from "../../assets/logos/seminovos-logo.png"
import implementos from "../../assets/logos/logistica.png"
import blogImg2 from "../../assets/blog/blog1.jpg";

export default function HomeHero() {
  return (
    <>
      <section className="home-hero">
        <img src={blogImg2} alt="SVD Transportes" className="home-hero__video-bg" />

        <div className="home-hero__wrap">
          <div className="home-hero__content-box">
            <div className="home-hero__content-main">
              <div className="home-hero__title-line">
                <img src={logoAzul} alt="Logo SVD" className="home-hero__svd-logo" />
                <h2 className="home-hero__content-title">TRANSPORTANDO<br />SONHOS</h2>
              </div>
              
              <p className="home-hero__content-subtitle">
                Excelência em Transporte, Logística, Acessórios e Seminovos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="services-bar">
          <ServicesBar logoAzul={logoAzul} />
        </div>
        
        <div className="info-section__content container">
            <div className="info-section__services">
              <Link to="/areacolaborador" className="service-item" style={{ textDecoration: 'none' }}>
                <img src={areadocolaborador} alt="Área do Colaborador" className="service-item__icon" />
                <p className="service-item__text">ÁREA DO COLABORADOR</p>
              </Link>
              <Link to="/areamei" className="service-item" style={{ textDecoration: 'none' }}>
                <img src={motoristamei} alt="Motorista MEI" className="service-item__icon" />
                <p className="service-item__text">MOTORISTA MEI</p>
              </Link>
              <Link to="/contato" className="service-item" style={{ textDecoration: 'none' }}>
                <img src={faleconosco} alt="Fale Conosco" className="service-item__icon" />
                <p className="service-item__text">FALE CONOSCO</p>
              </Link>
              <a href="https://www.canalintegro.com.br/GRUPOSVD?AspxAutoDetectCookieSupport=1" target="_blank" rel="noopener noreferrer" className="service-item" style={{ textDecoration: 'none' }}>
                <img src={ouvidoria} alt="Ouvidoria" className="service-item__icon" />
                <p className="service-item__text">OUVIDORIA</p>
              </a>
              <Link to="/trabalhe-conosco" className="service-item" style={{ textDecoration: 'none' }}>
                <img src={trabalheconosco} alt="Trabalhe Conosco" className="service-item__icon" />
                <p className="service-item__text">TRABALHE CONOSCO</p>
              </Link>
              <Link to="/cadastrofornecedores" className="service-item" style={{ textDecoration: 'none' }}>
                <img src={motoristamei} alt="Cadastro de Fornecedores" className="service-item__icon" />
                <p className="service-item__text">CADASTRO DE<br />FORNECEDORES</p>
              </Link>
            </div>
        </div>
      </section>
    </>
  );
}

function ServicesBar({ logoAzul }) {
  const containerRef = useRef(null);

  const scrollAmount = 170; // ajuste conforme o tamanho das bolinhas

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const circles = [
    <div key="orange" className="services-bar__circle services-bar__circle--orange">
      <div className='services-bar__circle-inner-secondary'>
        <img src={transportes} alt="SVD Transportes" />
      </div>
    </div>,
    <a
      key="green"
      href="https://svdacessorios.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      className="services-bar__circle services-bar__circle--green"
      style={{ display: "block" }}
    >
      <div className='services-bar__circle-inner-secondary'>
        <img src={acessorios} alt="SVD Acessórios" />
      </div>
    </a>,
    <a
      key="blue"
      href="https://svdseminovos.com.br/"
      target="_blank"
      rel="noopener noreferrer"
      className="services-bar__circle services-bar__circle--blue"
      style={{ display: "block" }}
    >
      <div className='services-bar__circle-inner-secondary'>
        <img src={seminovos} alt="SVD Seminovos" />
      </div>
    </a>,
    <div key="red" className="services-bar__circle services-bar__circle--red">
      <div className='services-bar__circle-inner-secondary'>
        <img src={implementos} alt="SVD Implementos Rodoviários" style={{ width: "85%", height: "90px" }} />
      </div>
    </div>,
  ];

  return (
    <div className="services-bar__container--carousel">
      <button
        className="carousel-arrow carousel-arrow--left"
        aria-label="Scroll left"
        onClick={scrollLeft}
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <polyline points="18,6 10,14 18,22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="services-bar__container" ref={containerRef}>
        {circles}
      </div>
      <button
        className="carousel-arrow carousel-arrow--right"
        aria-label="Scroll right"
        onClick={scrollRight}
        type="button"
      >
        <svg width="28" height="28" viewBox="0 0 28 28">
          <polyline points="10,6 18,14 10,22" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}