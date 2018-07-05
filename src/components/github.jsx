import React, { Component } from 'react'
import GithubCalendar from 'github-calendar'

import Block from './block'

export default class Github extends Component {
  componentDidMount() {
    new GithubCalendar(".github-calendar", this.props.user)
  }

  render() {

    return (
      <section id="github" class="s-about target-section">
        <div class="row narrow section-intro has-bottom-sep">
          <Block col="full">
            <h2>GitHub</h2>
            <div class="github-calendar"></div>
          </Block>
        </div>
      </section>
    )
  }
}
