import React, { Component } from 'react'
import Work from './work'

export default class Works extends Component {

  render() {
    const jobs = [
      {
        image: require('../images/1.gif'),
        title: "Acadêmico Online Mobile",
        subtitle: "Desenvolvimento Android, com Scrapper Web do Sistema Oficial",
        href: "https://github.com/pstwh/uepgacadonline-android",
        text: ""
      },
      {
        image: require('../images/2.gif'),
        title: "LegendasTV Terminal",
        subtitle: "Uma versão para download de legendas pelo terminal. Feita utilizando golang nos estudos.",
        href: "https://github.com/pstwh/legendastv-cli",
        text: ""
      },
      {
        image: require('../images/3.png'),
        title: "Dontfile",
        subtitle: "Sistema simples de gerenciamento online de arquivos utilizando Golang",
        href: "https://github.com/pstwh/dontfile-simple",
        text: ""
      },
      {
        image: require('../images/4.gif'),
        title: "Acadêmico Online Terminal",
        subtitle: "Desenvolvido durante o estudo de Golang",
        href: "https://github.com/pstwh/uepgacadonline-cli",
        text: ""
      },
      {
        image: require('../images/5.jpg'),
        title: "Sistema de detecção de Pneumonia utilizando Deep Learning",
        subtitle: "Utilizando um dataset público, foi definido um modelo para classificação binária.",
        href: "https://github.com/pstwh/pneumonia-pytorch-flask-api",
        text: ""
      },
      {
        image: require('../images/6.gif'),
        title: "Controle de Dispositivo",
        subtitle: "Apenas um teste de controle de dispositivos, utilizando controle Web, Mobile e um Pong",
        href: "https://github.com/pstwh/dying-with-serial",
        text: ""
      },
      {
        image: require('../images/7.png'),
        title: "Repositório de Soluções do Kaggle",
        subtitle: "Consumo de um modelo VGG16 em um Servidor Flask. Predizendo a classe da imagem enviada.",
        href: "https://github.com/pstwh/climbing-kaggle",
        text: ""
      },
      {
        image: "https://camo.githubusercontent.com/73f31349c172ceffabb5083f76ef2f2acee3d904/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32736a77434843624e38337955414d4f38672f67697068792e676966",
        title: "Imagenet API com React",
        subtitle: "Consumo de um modelo VGG16 em um Servidor Flask. Predizendo a classe da imagem enviada.",
        href: "https://github.com/pstwh/imagenet-pytorch-flask-api",
        text: ""
      },
      {
        image: "https://i.imgur.com/oB2MfYF.png",
        title: "Modelo para classificação automática de sentença jurídica",
        subtitle: "Utilização de Machine Learning para predição de sentença",
        href: "https://github.com/pstwh/echr",
        text: ""
      }
    ]

    return (
      <section id="trabalhos" class="s-works target-section">
        <div class="row narrow section-intro has-bottom-sep">
            <div class="col-full">
                <h3>Projetos</h3>
                <h1>Alguns projetos pessoais</h1>

                <p class="lead">Aqui constam alguns dos últimos projetos pessoais.
                Projetos desenvolvidos em empresas não podem ser listados por se tratar de sistemas em produção. </p>
            </div>
        </div>

        <div class="row masonry-wrap">
            <div class="masonry">
              {jobs.map(job => (
                <Work image={job.image}
                  title={job.title}
                  subtitle={job.subtitle}
                  href={job.href}
                  text={job.text}
                />
              ))}
            </div>
        </div>
      </section>
    )
  }
}
