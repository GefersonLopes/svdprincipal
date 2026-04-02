import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "../styles/TimelineCarousel.css";

export default function TimelineCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: "2001",
      title: "Fundação",
      description: "Fundação da SVD em Curitiba, iniciando uma trajetória de excelência no transporte.",
      highlight: true
    },
    {
      year: "2017",
      title: "Expansão",
      description: "Abertura da filial em Sorocaba, ampliando nossa presença estratégica."
    },
    {
      year: "2018",
      title: "São Bernardo do Campo",
      description: "Abertura da filial em São Bernardo do Campo, importante polo automotivo."
    },
    {
      year: "2019",
      title: "Consolidação e Qualidade",
      description: "Certificações ISO (9001, 14001, 39001). Abertura do Espaço do Cliente, criação da divisão Acessórios e 1ª participação na Fenatran."
    },
    {
      year: "2020",
      title: "Inovação e Mercado",
      description: "Criação da divisão Seminovos, transformação em SVD S.A., operação na Argentina e abertura da filial São Borja (RS)."
    },
    {
      year: "2021",
      title: "Ponta Grossa",
      description: "Expansão no Paraná com a abertura da filial em Ponta Grossa."
    },
    {
      year: "2022",
      title: "Evento Fenatran",
      description: "Consolidação da marca com a 2ª participação na maior feira de transportes da América Latina."
    },
    {
      year: "2023",
      title: "Infraestrutura",
      description: "Posto de Abastecimento Curitiba, nova Loja de Acessórios e início das atividades no novo pátio de São Bernardo."
    },
    {
      year: "2024",
      title: "Tecnologia e Novos Negócios",
      description: "Sistema Otiflow, Posto SBC, divisão Implementos, nova sede Seminovos Curitiba e 3ª participação na Fenatran."
    },
    {
      year: "2025",
      title: "Novos Horizontes",
      description: "Inauguração da nova sede da Funilaria e conquista da prestigiada Certificação OEA."
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  // Sempre mostra 3 cards, com o ativo à esquerda
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % timelineData.length;
      items.push({ ...timelineData[index], originalIndex: index });
    }
    return items;
  };

  return (
    <div className="timeline-carousel-root">
      <div className="timeline-carousel-header">
        <h2 className="timeline-carousel-title">
          Nossa História
        </h2>
        <div className="timeline-carousel-nav">
          <button
            onClick={prevSlide}
            className="timeline-carousel-btn"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="timeline-carousel-btn"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="timeline-carousel-grid">
        {getVisibleItems().map((item, index) => (
          <div
            key={`${item.year}-${index}`}
            className={`timeline-carousel-card${index === 0 ? " timeline-carousel-card--active" : ""}`}
          >
            {index === 0 && (
              <div className="timeline-carousel-card-neon"></div>
            )}
            <div className={`timeline-carousel-year${index === 0 ? " timeline-carousel-year--active" : ""}`}>
              {item.year}
            </div>
            <h3 className={`timeline-carousel-card-title${index === 0 ? " timeline-carousel-card-title--active" : ""}`}>
              {item.title}
            </h3>
            <p className={`timeline-carousel-card-desc${index === 0 ? " timeline-carousel-card-desc--active" : ""}`}>
              {item.description}
            </p>
            {index === 0 && (
              <>
                <div className="timeline-carousel-dot"></div>
                <div className="timeline-carousel-bar"></div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="timeline-carousel-progress">
        {timelineData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`timeline-carousel-progress-dot${index === activeIndex ? " timeline-carousel-progress-dot--active" : ""}`}
            aria-label={`Ir para ${timelineData[index].year}`}
          />
        ))}
      </div>
    </div>
  );
}