import React from "react";
import { ShieldAlert } from "lucide-react";
import { Card, CardContent } from "../components/Card";
import { Button } from "../components/Button";
import Topbar from "../components/home/TopBar";
import HomeHeader from "../components/home/HomeHeader";
import HomeFooter from "../components/home/HomeFooter";
import "../styles/Denuncias.css";

export default function Denuncias() {
  return (
    <>
      <Topbar />
      <HomeHeader />
      <div className="denuncias-root">
        {/* Hero Section */}
        <section className="denuncias-hero">
          <div className="denuncias-hero-overlay"></div>
          <div className="container denuncias-hero-content">
            <div className="denuncias-hero-text">
              <h1 className="denuncias-hero-title">Canal de Denúncias</h1>
              <p className="denuncias-hero-subtitle">
                Compromisso com a ética, transparência e respeito em todas as relações.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="denuncias-content-section">
          <div className="container">
            <div className="denuncias-content-wrapper">
              <h2 className="denuncias-section-title">
                Canal de Denúncias – Grupo SVD
              </h2>
              <p className="denuncias-section-subtitle">
                Compromisso com a ética, transparência e respeito em todas as relações
              </p>
              
              <Card className="denuncias-card">
                <CardContent className="denuncias-card-content">
                  <p className="denuncias-card-text">
                    O Grupo SVD tem como princípio atuar com integridade, responsabilidade e transparência em todas as suas operações e relacionamentos. Para reforçar esse compromisso, disponibilizamos um Canal de Denúncias confidencial, seguro e imparcial, aberto a todos que queiram relatar condutas que estejam em desacordo com nossos valores ou com a legislação vigente.
                  </p>
                  <Button 
                    onClick={() => window.open("https://www.canalintegro.com.br/GRUPOSVD?AspxAutoDetectCookieSupport=1", "_blank")}
                    className="denuncias-button"
                  >
                    <ShieldAlert className="denuncias-button-icon" />
                    Fazer uma Denúncia
                  </Button>
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