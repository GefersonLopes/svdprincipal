import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeHistory() {
  return (
    <section className="home-history">
      <div className="home-history__container container">
        <h2 className="home-history__title">Nossa História</h2>
        <p className="home-history__text">
          Fundado em 2001, o Grupo SVD iniciou suas operações com foco no transporte rodoviário de cargas, 
          rapidamente consolidando-se como referência em logística no Brasil e no Mercosul. Ao longo dos anos, 
          ampliou sua atuação para novos segmentos, como venda de caminhões seminovos, acessórios personalizados e, 
          mais recentemente, implementos rodoviários. Com matriz em Curitiba-PR e filiais estrategicamente 
          posicionadas, o Grupo SVD alia tradição e inovação, garantindo excelência em cada solução oferecida, 
          sempre com o compromisso de "Transportar Sonhos".
        </p>
        <Link to="/sobre" className="home-history__button">LEIA MAIS...</Link>
      </div>
    </section>
  );
}