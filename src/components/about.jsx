import React, { Component } from 'react'
import Content from './content'
import Skills from './skills'
import Block from './block'

import Timeblock from './timeblock'
import Timeline from './timeline'

export default class About extends Component {

  render() {
    return(
      <section id="sobre" class="s-about target-section">
        <div class="row narrow section-intro has-bottom-sep">
          <Block col="full" textAlign="center">
              <img class="img-about"/>
              <h3>Sobre</h3>
              <h1>Um pouco sobre mim</h1>
              <p class="lead">Sou Paulo Alves, tenho 22 anos e considero a
              inovação o fator crucial para o sucesso.
              Sou <b>fascinado</b> em Machine Learning e Deep Learning.
              <br/>
              Gosto bastante de realizar projetos pessoais, então também sou desenvolvedor fullstack web, desktop e mobile. Buscando
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

        <div id="historico" class="row about-content about-content--timeline">

            <Block col="full" textAlign="center">
                <h3>Histórico e Experiência</h3>
            </Block>

            <Block col="six"
                   tab="full"
                   align="right">
                <Timeline>
                  <Timeblock period="FEVEREIRO 2017 - PRESENTE"
                             place="Núcleo de Tecnologia da Informação"
                             work="Estágio/Desenvolvedor Fullstack">
                    <p>
                      Em 2016 como estudante, fui convidado para desenvolver parte
                      de um sistema importante para Universidade. Desde então me tornei
                      Estágiario/Desenvolvedor Fullstack e já participei de diversos projetos.
                    </p>
                  </Timeblock>
                  <Timeblock period="FEVEREIRO 2014 - PRESENTE"
                             place="Universidade Estadual de Ponta Grossa"
                             work="Engenharia de Computação">
                    <p>
                      O curso de engenharia de computação me permitiu ter mais tempo
                      exclusivo para estudar essa área. A universidade decepciona bastante
                      no ensino prático e resolução de problemas, porém trás uma bagagem teórica.
                      Essa foi uma parte importante, onde pude gastar meus esforços e aprender
                      por conta própria.
                    </p>
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
                    <p>
                      Antes de entrar em um universidade, desenvolvi
                      alguns softwares simples utilizando Python e C#. Foram pensados na
                      época para facilitar meu dia a dia.
                    </p>
                  </Timeblock>
                  <Timeblock period="2006"
                             place="Início"
                             work="Iniciando com C e Assembly">
                    <p>
                      Meu primeiro contato com desenvolvimento foi próximo dos 10 anos.
                      Como toda criança daquela época, gostava de torrar meu tempo
                      em jogos. Essa fase me garantiu o primeiro contato com linguagens
                      como C e Assembly. É óbvio que naquela época não entendia exatamente
                      o que estava fazendo, porém mesmo assim escrevi alguns tutoriais na
                      internet.
                    </p>
                  </Timeblock>
                </Timeline>
            </Block>
          </div>
        </section>
    )
  }
}
