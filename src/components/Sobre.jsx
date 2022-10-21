import React from 'react'
import '../style/sobre.css'
import sobre from '../imgs/sobre.png'

function Sobre() {
  return (
    <section id="sobre-mim">
      <div class="centralizador">
        <img src="" alt="" />
        <div class="sobre-mim">
          <h2>Sobre mim</h2>
          <br />
          <p className='format'>
            Me chamo Diego e atualmente estou realizando o curso de Desenvolvimento Web da
            Trybe, desde muito novo sou apaixonado por games e tecnologia, e
            quase tudo que envolve o universo geek/nerd, sempre tive um sonho de criar meu próprio
            game, foi desse sonho que surgiu a minha vontade de aprender programação.
          </p>
          <br />
          <p className='format'>
            Dentro do curso da Trybe trabalhei com inúmeros projetos onde pude desenvolver conhecimento
            em diversas tecnologias
          </p>
        </div>
        <img   className='foto-i second'src={ sobre } alt="" />
      </div>
  </section>
  )
}

export default Sobre