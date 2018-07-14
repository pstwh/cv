import React, { Component } from 'react'
import Block from './block'

export default class Content extends Component {

  render() {
      return(
        <Block col="six" tab="full" align="left">
            <h3>Um muito mais sobre mim</h3>
            <p>
              Trabalhar com Machine Learning e Deep Learning não é tudo.
              Não tenho subárea exclusiva, linguagem favorita ou amarras
              com linguagens e frameworks. <br/><br/>
              Gosto muito de trabalhar com linux (minha distro favorita é a arch linux),
              porém atualmente sou usuário de macOS no ambiente pessoal e linux/windows no profissional. <br/><br/>
              A lista de tecnologias a direita pode parecer um pouco exagerada ou explicita demais,
              porém de fato são tecnologias que estou focando no momento e tentando integrar
              (como por exemplo utilizar modelos simples em tensorflow em dispositivos android). Já fiz projetos com outras
              tecnologias também, e que não constam ali, como Ruby (utilizando Ruby on Rails), Java, C#
              e C. <br/><br/>

              Uma das minhas paixões são fotos de longa exposição <a target="_blank" href="https://i.imgur.com/vr3RZLP.jpg">(uma de minhas favoritas)</a>, isso provavelmente teve
              grande influência nesse design "fluído" dessa página.  <br/><br/>

              Um outro hobbie, porém que está relacionado à área, é o <a target="_blank" href="http://kaggle.com">Kaggle</a>. Participo das competições e
              vejo o máximo de material possível para vencê-las (como os lendário cursos da deeplearning.ai
              e HSE). <br/><br/>

              Como estou próximo do término da graduação, já existem planos para pós-graduação na área de
              Inteligência Artificial.
            </p>
        </Block>
      )
  }
}
