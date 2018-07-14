import React, { Component } from 'react'
import Block from './block'

export default class Skills extends Component {

  render() {

    const title = "Tecnologias que utilizo/estudo atualmente"
    const skills = [
      {
        name: "Python",
        percentage: "90"
      },
      {
        name: "HTML5, CSS3, JS e Web clássico",
        percentage: "90"
      },
      {
        name: "PHP Nativo e Laravel",
        percentage: "90"
      },
      {
        name: "React e React Native",
        percentage: "85"
      },
      {
        name: "Data Science, Machine e Deep Learning",
        percentage: "80"
      },
      {
        name: "Tensorflow e Keras",
        percentage: "80"
      },
      {
        name: "Javacript ES6, Node e Derivados...",
        percentage: "80"
      },
      {
        name: "Golang",
        percentage: "70"
      },
      {
        name: "Pytorch",
        percentage: "70"
      },
      {
        name: "Android Java/Kotlin",
        percentage: "65"
      },
      {
        name: "iOS com Swift",
        percentage: "50"
      }
    ]

    return (
      <Block col="six" tab="full" align="right">
          <h3>{title}</h3>

          <ul class="skill-bars">
            {skills.map(skill => (
              <li>
                <div class={"progress percent"+skill.percentage}></div>
                <strong>{skill.name}</strong>
              </li>
            ))}
          </ul>
      </Block>
    )
  }
}
