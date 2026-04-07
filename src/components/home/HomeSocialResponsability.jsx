import React from 'react';
import { Link } from 'react-router-dom';
import ppImg from "../../assets/logos/pp.png";

export default function HomeSocialResponsibility() {
  return (
    <section className="home-social-responsibility">
      <div className="home-social-responsibility__container container">
        <h2 className="home-social-responsibility__title">Responsabilidade Sócio Ambiental</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 600px' }}>
            <p className="home-social-responsibility__text">
              O Grupo SVD acredita no impacto positivo que pode gerar além das estradas. Por isso, 
              investimos em projetos sociais que apoiam a educação, a sustentabilidade e o 
              desenvolvimento das comunidades onde atuamos. Nossa atuação inclui iniciativas 
              voltadas à preservação ambiental, campanhas de doação, financiamento de projetos 
              sociais por meio de leis de incentivo fiscal e ações que promovem a inclusão e o 
              bem-estar.
              <br /><br />
              Conheça mais sobre o trabalho social realizado pelo Grupo SVD e faça parte dessa 
              transformação!
            </p>
            <Link to="/sustentabilidade" className="home-social-responsibility__button">SAIBA MAIS</Link>
          </div>
          <div style={{ flex: '0 1 auto', margin: '0 auto' }}>
            <img 
              src={ppImg} 
              alt="Selo Nós Apoiamos - Hospital Pequeno Príncipe" 
              style={{ maxWidth: '350px', height: 'auto' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}