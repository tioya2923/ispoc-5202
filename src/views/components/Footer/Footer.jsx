import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-links">
          <div className='title-footer'>Institucional</div>
          <div className='other-footers-links'><a href='#apresentacao'>Apresentação</a></div>
          <div className='other-footers-links'><a href='#noticias'>Notícias</a></div>
        </div>
        <div className="footer-links">
          <div className='title-footer'>Ensino</div>
          <div className='other-footers-links'><a href='#faculdades'>Faculdades</a></div>
          <div className='other-footers-links'><a href='#escolas'>Escolas</a></div>
          <div className='other-footers-links'><a href='#ensino'>Ensino</a></div>
          <div className='other-footers-links'><a href='#cursos'>Cursos</a></div>
          <div className='other-footers-links'><a href='#candidaturas'>Candidaturas</a></div>
          <div className='other-footers-links'><a href='#porque-ispoc'>Porquê o ISPOC</a></div>
        </div>
        <div className="footer-links">
          <div className='title-footer'>Contactos</div>
          <div className='other-footers-links'><a href='#institucionais'>Institucionais</a></div>
          <div className='other-footers-links'><a href='#academicos'>Académicos</a></div>
        </div>
        <div className="footer-links">
          <div className='title-footer'>Ligações úteis</div>
          <div className='other-footers-links'><a href='#e-servicos'>E-Serviços</a></div>
          <div className='other-footers-links'><a href='#moodle'>Moodle</a></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
