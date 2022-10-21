import React from 'react';
import '../style/header.css';
import imgPerfil from '../imgs/testando.png';

function header() {
  return (
    <div className='fundo'>
      <div className='fixed'>
        <ul className='list-header'>
          <li>Inicio</li>
          <li>Projetos</li>
          <li>Habilidades</li>
          <li>Contato</li>
        </ul>
      </div>
      <div className='infoPerfil'>
        <img className='imagemPerfil' src={ imgPerfil } alt="" />
        <div className='nome'>
          <h1>Diego Gonçalves Picoli</h1>
          <h3>Desenvolvedor Front-End</h3>
          <div className='contatos'>
            <h3>LinkedIn</h3>
            <h3>GitHub</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header