import React, { useEffect } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PrivacidadeCookies from "./pages/PrivacidadeCookies";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import TrabalheConosco from "./pages/TrabalhoConosco";
import InformativoSBB from "./pages/InformativoSBB";
import Galeria from "./pages/Galeria";
import Blog from "./pages/Blog";
import Sustentabilidade from "./pages/Sustentabilidade";
import RelatorioTransparencia from "./pages/RelatorioTransparencia";
import Sobre from "./pages/Sobre";
import Transporte from "./pages/Transporte";
import Logistica from "./pages/Logistica";
import Implementos from "./pages/Implementos";
import FunilariaEPintura from "./pages/FunilariaEPintura";
import CatalogoOnline from "./pages/CatalogoOnline";
import AreaColaborador from "./pages/AreaColaborador";
import AreaMEI from "./pages/AreaMEI";
import AreaPrestadorServicos from "./pages/AreaPrestadorServicos";
import CadastroFornecedores from "./pages/CadastroFornecedores";
import Denuncias from "./pages/Denuncias";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/privacidade-cookies" element={<PrivacidadeCookies />} />
        <Route path="/politica-cookies" element={<Navigate to="/privacidade-cookies" replace />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/informativo-sbb" element={<InformativoSBB />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sustentabilidade" element={<Sustentabilidade />} />
        <Route path="/relatorio-transparencia" element={<RelatorioTransparencia />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/transporte" element={<Transporte />} />
        <Route path="/logistica" element={<Logistica />} />
        <Route path="/implementos" element={<Implementos />} />
        <Route path="/funilaria" element={<FunilariaEPintura />} />
        <Route path="/catalogo" element={<CatalogoOnline />} />
        <Route path="/areacolaborador" element={<AreaColaborador />} />
        <Route path="/areamei" element={<AreaMEI />} />
        <Route path="/areaprestador" element={<AreaPrestadorServicos />} />
        <Route path="/cadastrofornecedores" element={<CadastroFornecedores />} />
        <Route path="/denuncias" element={<Denuncias />} />
      </Routes>
    </Router>
  );
}

export default App;
