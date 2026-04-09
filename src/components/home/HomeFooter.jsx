import React from "react";
import { Link } from "react-router-dom"; // Adicione esta linha
import logoBranca from "../../assets/logo-branca.png";
import transportesLogo from "../../assets/logos/transportes-logo.png";
import acessoriosLogo from "../../assets/logos/acessorios-logo.png";
import seminovosLogo from "../../assets/logos/seminovos-logo.png";
import implementosLogo from "../../assets/logos/logistica.png";
import codigoConduta from "../../assets/documentos/etica.pdf";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function HomeFooter() {
  return (
    <footer className="custom-footer-bg">
      {/* Neon background effect */}
      <div className="custom-footer-bg-neon"></div>
      <div className="custom-footer-bg-radial"></div>
      
      <div className="custom-footer-container">
        <div className="custom-footer-grid">
          {/* Logo e Info Principal */}
          <div className="custom-footer-col-1">
            <div className="custom-footer-logo-info">
              <div className="custom-footer-logo-svg-wrap">
                <img
                  src={logoBranca}
                  alt="SVD Transportes"
                  className="custom-footer-logo-img"
                  style={{ width: "180px", height: "auto" }}
                />
              </div>
              {/* <span className="custom-footer-title">SVD TRANSPORTES</span> */}
            </div>
            <p className="custom-footer-description">
              Excelência em transporte e logística, conectando o Brasil com soluções inovadoras e sustentáveis.
            </p>
            <div className="custom-footer-social-links">
              <div className="custom-footer-social-icon custom-footer-facebook">
                <a href="https://www.facebook.com/svdtransportes/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="custom-footer-social-svg" />
                </a>
              </div>
              <div className="custom-footer-social-icon custom-footer-instagram">
                <a href="https://www.instagram.com/svdtransportes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="custom-footer-social-svg" />
                </a>
              </div>
              <div className="custom-footer-social-icon custom-footer-linkedin">
                <a href="https://www.linkedin.com/company/svd-transportes/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="custom-footer-social-svg" />
                </a>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="custom-footer-heading">Navegação</h3>
            <ul className="custom-footer-list">
              <li>
                <Link to="/home" className="custom-footer-link">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="custom-footer-link">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/servicos" className="custom-footer-link">Serviços</Link>
              </li>
              <li>
                <Link to="/sustentabilidade" className="custom-footer-link">Sustentabilidade</Link>
              </li>
              <li>
                <Link to="/blog" className="custom-footer-link">Blog</Link>
              </li>
              <li>
                <Link to="/contato" className="custom-footer-link">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Nossos Produtos */}
          <div>
            <h3 className="custom-footer-heading">Nossos Produtos</h3>
            <ul className="custom-footer-list">
              <li>
                <Link to="/transporte" className="custom-footer-link">Transporte e Armazenagem</Link>
              </li>
              <li>
                <a href="https://svdseminovos.com.br/" target="_blank" rel="noopener noreferrer" className="custom-footer-link">Seminovos</a>
              </li>
              <li>
                <a href="https://svdacessorios.com.br/" target="_blank" rel="noopener noreferrer" className="custom-footer-link">Acessórios</a>
              </li>
              <li>
                {/*<Link to="/logistica" className="custom-footer-link">Logística</Link>*/}
              </li>
              <li>
                {/*<Link to="/implementos" className="custom-footer-link">Implementos</Link>*/}
                {/*<Link to="/funilaria" className="custom-footer-link">Funilaria e Pintura</Link>*/}
              </li>
              <li>
                {/*<Link to="/catalogo" className="custom-footer-link">Catálogo Online</Link>*/}
              </li>
            </ul>
          </div>

          {/* Portais e Políticas + Newsletter */}
          <div>
            <h3 className="custom-footer-heading">Portais & Políticas</h3>
            <ul className="custom-footer-list custom-footer-list-mb">
              <li>
                {/*<Link to="/areacolaborador" className="custom-footer-link">Área do Colaborador</Link>*/}
              </li>
              <li>
                {/*<Link to="/areamei" className="custom-footer-link">Área do MEI</Link>*/}
              </li>
              <li>
                {/*<Link to="/areaprestador" className="custom-footer-link">Área do Prestador</Link>*/}
              </li>
              <li>
                <Link to="/trabalhe-conosco" className="custom-footer-link">Trabalhe Conosco</Link>
              </li>
              <li>
                <Link to="/cadastrofornecedores" className="custom-footer-link">Cadastro de Fornecedores</Link>
              </li>
              <li>
                <Link to="/denuncias" className="custom-footer-link">Ouvidoria</Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="custom-footer-link">Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/relatorio-transparencia" className="custom-footer-link">Relatório de Transparência</Link>
              </li>
              <li>
                <a href={codigoConduta} download className="custom-footer-link">Código de Conduta</a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="custom-footer-newsletter">
              <h4 className="custom-footer-newsletter-title">Newsletter</h4>
              <div className="custom-footer-newsletter-form">
                <input 
                  type="email" 
                  placeholder="Seu email"
                  className="custom-footer-newsletter-input"
                />
                <button className="custom-footer-newsletter-btn">
                  <Mail className="custom-footer-newsletter-icon" />
                </button>
              </div>
            </div>

            {/* Bolinhas Coloridas com logos SVD */}
            <div className="custom-footer-balls">
              <div className="custom-footer-ball custom-footer-ball-orange">
                <div className="custom-footer-ball-inner">
                  <img src={transportesLogo} alt="Transportes" className="custom-footer-ball-icon" />
                </div>
              </div>
              <a 
                href="https://svdacessorios.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="custom-footer-ball custom-footer-ball-lime"
                style={{ display: "inline-block" }}
              >
                <div className="custom-footer-ball-inner">
                  <img src={acessoriosLogo} alt="Acessórios" className="custom-footer-ball-icon" />
                </div>
              </a>
              <a
                href="https://svdseminovos.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-footer-ball custom-footer-ball-yellow"
                style={{ display: "inline-block" }}
              >
                <div className="custom-footer-ball-inner">
                  <img src={seminovosLogo} alt="Seminovos" className="custom-footer-ball-icon" />
                </div>
              </a>
              <div className="custom-footer-ball custom-footer-ball-purple" >
                <div className="custom-footer-ball-inner">
                  <img src={implementosLogo} alt="Implementos" className="custom-footer-ball-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-footer-bottom">
          <div className="custom-footer-line"></div>
          <p className="custom-footer-copyright">&copy; 2024 SVD Transportes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
