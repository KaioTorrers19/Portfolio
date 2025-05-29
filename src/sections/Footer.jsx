import React from 'react';
import {socialImgs} from '../constants/index'

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col justify-center">
            <p>Termos & Condições</p>
          </div>
          <div className="socials">
  {socialImgs.map((socialImg, index) => (
    <a
      key={index}
      href={socialImg.url}
      target="_blank"
      rel="noopener noreferrer"
      className="icon"
    >
      <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
    </a>
  ))}
</div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
              © {new Date().getFullYear()} Kaio Torres. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;