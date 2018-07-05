import React, { Component } from 'react'
import Block from './block'

export default class Skills extends Component {

  render() {

    let title = "I've Got Some skills."
    let skills = [
      {
        name: "HTML5",
        percentage: "90"
      },
      {
        name: "CSS3",
        percentage: "85"
      },
      {
        name: "JQuery",
        percentage: "70"
      },
      {
        name: "PHP",
        percentage: "95"
      },
      {
        name: "Wordpress",
        percentage: "75"
      },
      {
        name: "Angular JS",
        percentage: "90"
      }
    ]

    return (
      <Block col="six" tab="full" align="right">
          <h3>{title}</h3>

          <ul class="skill-bars">
            {skills.map(skill => (
              <li>
                <div class={"progress percent"+skill.percentage}><span>{skill.percentage}%</span></div>
                <strong>{skill.name}</strong>
              </li>
            ))}
          </ul>
      </Block>
    )
  }
}
