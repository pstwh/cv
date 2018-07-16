import React, { Component } from 'react'
import GithubCalendar from 'github-calendar'
import 'github-calendar/dist/github-calendar.css'
import 'github-calendar/dist/github-calendar-responsive.css'

import Block from './block'

export default class Github extends Component {
  componentDidMount() {
    new GithubCalendar(".github-calendar", this.props.user, {
      summary_text: "Resumo dos pull requests, issues, e commits feitos por Paulo Alves",
      responsive: true
    })
  }

  render() {

    return (
      <section id="github" class="s-about target-section">
        <div class="row narrow section-intro">
          <Block col="full">
            <div class="github-calendar"></div>
          </Block>
        </div>
      </section>
    )
  }
}
