import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e Slogan */}
        <div className="footer-section-living">
          <h2 className="logo">LIVING</h2>
          <p className="slogan">Mais que imóveis, projetos de vida.</p>
        </div>

        {/* Coluna: Imóveis */}
        <div className="footer-section">
          <h3>Ver todos os imóveis por estado</h3>
          <Link to="/empreendimentos">Rio de Janeiro</Link>
          <Link to="/empreendimentos">São Paulo</Link>
        </div>

        {/* Coluna: Contato */}
        <div className="footer-section">
          <h3>Fale com um corretor</h3>
          <Link to="/empreendimentos">Chat Online</Link>
          <Link to="/empreendimentos">WhatsApp</Link>
          <Link to="/empreendimentos">E-mail</Link>
          <Link to="/empreendimentos">Receba uma ligação</Link>
        </div>

        {/* Coluna: Sobre a Living */}
        <div className="footer-section">
          <h3>Sobre a Living</h3>
          <Link to="/empreendimentos">Living</Link>
          <Link to="/empreendimentos">Trabalhe conosco</Link>
          <Link to="/empreendimentos">Relação com investidores</Link>
          <Link to="/empreendimentos">Empréstimo com garantia de imóvel</Link>
          <Link to="/empreendimentos">Integridade Cyrela</Link>
          <Link to="/empreendimentos">Política do SGI</Link>
        </div>

        {/* Coluna: Grupo Cyrela */}
        <div className="footer-section">
          <h3>Grupo Cyrela</h3>
          <Link to="/empreendimentos">Cyrela</Link>
          <Link to="/empreendimentos">Vivaz</Link>
          <Link to="/empreendimentos">CashMe</Link>
          <h4>Portal do Cliente</h4>
          <Link to="/empreendimentos">Instituto Cyrela</Link>
          <Link to="/empreendimentos">Blog</Link>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h4>Fale Conosco</h4>
          <p>(11) 4502-3456</p>
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <Link to="/empreendimentos"><i className="fab fa-facebook"></i></Link>
            <Link to="/empreendimentos"><i className="fab fa-instagram"></i></Link>
            <Link to="/empreendimentos"><i className="fab fa-youtube"></i></Link>
            <Link to="/empreendimentos"><i className="fab fa-tiktok"></i></Link>
          </div>
          {/* Botões App */}
          <div className="app-buttons">
            <Link to="/empreendimentos">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </Link>
            <Link to="/empreendimentos">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
