import React, { Component } from 'react'
import P5Wrapper from 'react-p5-wrapper';

import Social from './social'
import Sketch from '../sketchs/flow'

export default class Perfil extends Component {

  render() {

    let perfil = {
        title: 'Hello World',
        description: `
        Eu sou Paulo Alves
        Desenvolvedor apaixonado por inovação.
        `
    }


    return (

      <section id="home"
               class="s-home page-hero target-section">

            <div class="overlay"></div>
            <div class="shadow-overlay"></div>
            <P5Wrapper sketch={Sketch} style={{zIndex: -10}}/>


            <div class="home-content">
                <div class="row home-content__main">

                    <h3>{perfil.title}</h3>
                    <h1>{perfil.description}</h1>

                    <div class="home-content__buttons">
                        <a href="#trabalhos" class="smoothscroll btn btn--stroke">
                            Últimos Projetos
                        </a>
                        <a href="#sobre" class="smoothscroll btn btn--stroke">
                            Sobre Mim
                        </a>
                    </div>
                    <div class="home-content__scroll">
                        <a href="#sobre" class="scroll-link smoothscroll">
                            <span>Conheça-me</span>
                        </a>
                    </div>

                </div>
            </div>
            <Social/>
        </section>
    )
  }
}
