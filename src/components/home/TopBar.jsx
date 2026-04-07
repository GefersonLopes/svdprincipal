import React from 'react';
import { Phone, Instagram, Linkedin, Facebook } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__contact-info">
          <a
            href="tel:+554133733330"
            className="topbar__icon"
            aria-label="Ligar para (41) 3373-3330"
          >
            <Phone size={18} className="topbar__icon" />
          </a>ㅤ
          <a
            href="https://wa.me/554133733330"
            className="topbar__icon"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp size={18} className="topbar__icon" />
          </a>ㅤ
          <span className="topbar__phone" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>(41) 3373-3330ㅤ |ㅤ </span>
        </div>
        <div className="topbar__socials">
          <a
            href="https://www.linkedin.com/company/svd-transportes/posts/?feedView=all" 
            aria-label="LinkedIn"
            className="topbar__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={20} className="topbar__social-icon" />ㅤ
          </a>
          <a
            href="https://www.instagram.com/svdtransportes/"
            aria-label="Instagram"
            className="topbar__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={20} className="topbar__social-icon" />ㅤ
          </a>
          <a
            href="https://www.facebook.com/svdtransportes/" 
            aria-label="Facebook"
            className="topbar__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={20} className="topbar__social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}