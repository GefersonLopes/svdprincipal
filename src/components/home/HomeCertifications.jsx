import React from 'react';
import { Link } from 'react-router-dom';
import logoSVD from "../../assets/logo-azul.png";
import cert9001 from "../../assets/certificados/conformidade1.png";
import cert14001 from "../../assets/certificados/conformidade2.png";
import cert39001 from "../../assets/certificados/conformidade3.png";
import iso from "../../assets/certificados/iso.png";
import aeo from "../../assets/certificados/aeo.png";

export default function HomeCertifications() {
  return (
    <section className="home-certifications">
      {/* Seção OEA */}
      <div className="home-certifications__container container">
        <div className="home-certifications__image-content">
          <img src={aeo} alt="Selo Operador Econômico Autorizado (OEA)" className="home-certifications__oea-img" />
        </div>
        <div className="home-certifications__text-content">
          <h2 className="home-certifications__title">OEA – Operador Econômico Autorizado</h2>
          <p className="home-certifications__description">
            <strong>Segurança e agilidade no comércio internacional</strong>
          </p>
          <p className="home-certifications__description">
            O Grupo SVD é certificado como Operador Econômico Autorizado (OEA), um selo de confiança da Receita Federal que reconhece empresas que cumprem rigorosos critérios de segurança da cadeia logística e conformidade aduaneira.
          </p>
          <p className="home-certifications__description">
            Essa certificação nos posiciona como um parceiro estratégico no comércio exterior, garantindo processos de exportação mais ágeis, seguros e com menos burocracia para nossos clientes.
          </p>
        </div>
      </div>

      <div className="home-blog__divider" style={{ margin: '4rem auto' }}></div>

      {/* Seção ISO */}
      <div className="home-certifications__container container">
        <div className="home-certifications__text-content">
          <h2 className="home-certifications__title">Certificações de Excelência</h2>
          <p className="home-certifications__description">
            A SVD Transportes é sinônimo de qualidade, segurança e sustentabilidade, refletidos nas
            certificações ISO que orgulhosamente ostentamos:
          </p>
          <ul className="home-certifications__list">
            <li>
              <p><strong>ISO 9001 – Gestão da Qualidade:</strong> Certificação internacional que garante a excelência na gestão da qualidade, assegurando a satisfação dos clientes, além de processos padronizados, melhoria contínua e alto nível de eficiência nos serviços prestados.</p>
            </li>
            <li>
              <p><strong>ISO 14001 – Gestão Ambiental:</strong> Reforça o compromisso do Grupo SVD com a sustentabilidade e a gestão ambiental responsável, promovendo práticas que reduzem impactos ao meio ambiente e incentivam o uso consciente de recursos.</p>
            </li>
            <li>
              <p><strong>ISO 39001 – Segurança Viária:</strong> Norma internacional voltada à segurança no transporte rodoviário, que estabelece diretrizes para reduzir riscos, prevenir acidentes e garantir operações logísticas mais seguras para colaboradores, clientes e para a sociedade.</p>
            </li>
          </ul>
          <p className="home-certifications__description">
            Essas certificações são prova do nosso esforço contínuo em oferecer serviços que superam
            expectativas e contribuem para um futuro mais seguro e sustentável.
          </p>
          <Link to="/sobre" className="home-certifications__button">SAIBA MAIS</Link>
        </div>

        {/* Bloco das imagens e logo */}
        <div className="home-certifications__image-content">
          <div className="certificate-images">
            <img src={cert9001} alt="Certificado ISO 9001" className="certificate-image" />
            <img src={cert14001} alt="Certificado ISO 14001" className="certificate-image" />
            <img src={cert39001} alt="Certificado ISO 39001" className="certificate-image" />
          </div>
        </div>
      </div>
    </section>
  );
}