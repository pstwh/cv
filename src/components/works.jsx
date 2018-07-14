import React, { Component } from 'react'
import Work from './work'

export default class Works extends Component {

  render() {
    const jobs = [
      {
        image: "https://camo.githubusercontent.com/0c0274a4be819c4242993a5b0181b39e6eb6ec72/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f35384667706e524147573542676a7a5031712f67697068792e676966",
        title: "Acadêmico Online Mobile",
        subtitle: "Desenvolvimento Android, com Scrapper Web do Sistema Oficial",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://i.imgur.com/3RgqybT.gif",
        title: "LegendasTV Terminal",
        subtitle: "Uma versão para download de legendas pelo terminal. Feita utilizando golang nos estudos.",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://i.imgur.com/DiX8Fzw.png",
        title: "Dontfile",
        subtitle: "Sistema simples de gerenciamento online de arquivos utilizando Golang",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://i.imgur.com/uJZu7oZ.gif",
        title: "Acadêmico Online Terminal",
        subtitle: "Desenvolvido durante o estudo de Golang",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://catatanmini.com/wp-content/uploads/2017/05/bronchopneumonia.jpeg",
        title: "Sistema de detecção de Pneumonia utilizando Deep Learning",
        subtitle: "Utilizando um dataset público, foi definido um modelo para classificação binária.",
        href: "https://www.behance.net/",
        text: ""
      },
      {
        image: "https://camo.githubusercontent.com/d32d70ec97d0fea883a1b08c3f1d04fb5481fb6f/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f353157353264554566724b333774514b4a4f2f67697068792e676966",
        title: "Controle de Dispositivo",
        subtitle: "Apenas um teste de controle de dispositivos, utilizando controle Web, Mobile e um Pong",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://www.kaggle.com/static/images/logos/kaggle-logo-gray-300.png",
        title: "Repositório de Soluções do Kaggle",
        subtitle: "Consumo de um modelo VGG16 em um Servidor Flask. Predizendo a classe da imagem enviada.",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://camo.githubusercontent.com/73f31349c172ceffabb5083f76ef2f2acee3d904/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32736a77434843624e38337955414d4f38672f67697068792e676966",
        title: "Imagenet API com React",
        subtitle: "Consumo de um modelo VGG16 em um Servidor Flask. Predizendo a classe da imagem enviada.",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://i.imgur.com/oB2MfYF.png",
        title: "Modelo para classificação automática de sentença jurídica",
        subtitle: "Utilização de Machine Learning para predição de sentença",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      }
    ]

    return (
      <section id="works" class="s-works target-section">
        <div class="row narrow section-intro has-bottom-sep">
            <div class="col-full">
                <h3>Projetos</h3>
                <h1>Alguns projetos pessoas</h1>

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
