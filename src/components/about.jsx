import React, { Component } from 'react'
import Content from './content'
import Skills from './skills'
import Block from './block'

import Timeblock from './timeblock'
import Timeline from './timeline'

export default class About extends Component {

  render() {
    return(
      <section id="about" class="s-about target-section">
        <div class="row narrow section-intro has-bottom-sep">
          <Block col="full" textAlign="center">
              <h3>Sobre</h3>
              <h1>Um Pouco Sobre Mim</h1>
              <p class="lead">Meu nome é Paulo Alves, busco a inovação na resolução
              de problemas. Atualmente estou facinado em Inteligência Artificial,
              principalmente em treinar modelos usando <i>Datasets</i> enormes.
              Também sou desenvolvedor fullstack web, desktop e mobile. Tentando
              sempre integrar tudo.</p>
          </Block>
        </div>

        <div class="row about-content">
            <Content/>
            <Skills/>
        </div>

        <div class="row about-content about-content--buttons">

            <Block col="six" tab="full" align="left">
                <a href="#0" class="btn btn--primary full-width">Veja meu Currículo</a>
            </Block>
            <Block col="six" tab="full" align="right">
                <a href="#0" class="btn full-width">Contato</a>
            </Block>
        </div>

        <div class="row about-content about-content--timeline">

            <Block col="full" textAlign="center">
                <h3>Histórico e Experiência</h3>
            </Block>

            <Block col="six"
                   tab="full"
                   align="right">
                <Timeline>
                    <Timeblock period="FEVEREIRO 2014 - PRESENTE"
                               place="Universidade Estadual de Ponta Grossa"
                               work="Engenharia de Computação">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                    <Timeblock period="FEVEREIRO 2017 - PRESENT"
                               place="Núcleo de Tecnologia da Informação"
                               work="Estágio/Desenvolvedor Fullstack">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                </Timeline>
            </Block>

            <Block col="six"
                   tab="full"
                   align="left">
                <Timeline>
                    <Timeblock period="2012"
                               place="Um pouco antes da Universidade"
                               work="Um breve trabalho com Python e C#">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                    <Timeblock period="2006"
                               place="Início"
                               work="Iniciando com C e Assembly">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                </Timeline>
            </Block>
          </div>
        </section>
    )
  }
}
