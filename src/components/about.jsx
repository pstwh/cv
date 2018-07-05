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
              <h3>About</h3>
              <h1>More About Me</h1>
              <p class="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
          </Block>
        </div>

        <div class="row about-content">
            <Content/>
            <Skills/>
        </div>

        <div class="row about-content about-content--buttons">

            <Block col="six" tab="full" align="left">
                <a href="#0" class="btn btn--primary full-width">Download My CV</a>
            </Block>
            <Block col="six" tab="full" align="right">
                <a href="#0" class="btn full-width">Hire Me Now</a>
            </Block>
        </div>

        <div class="row about-content about-content--timeline">

            <Block col="full" textAlign="center">
                <h3>Experience.</h3>
            </Block>

            <Block col="six" tab="full" align="left">
                <Timeline>
                    <Timeblock period="JULY 2012 - JUNE 2014" place="Great Design Studio" work="Web Designer">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                    <Timeblock period="JULY 2012 - JUNE 2014" place="Great Design Studio" work="Web Designer">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                </Timeline>
            </Block>

            <Block col="six" tab="full" align="right">
                <Timeline>
                    <Timeblock period="JULY 2012 - JUNE 2014" place="Great Design Studio" work="Web Designer">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                    <Timeblock period="JULY 2012 - JUNE 2014" place="Great Design Studio" work="Web Designer">
                      <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                    </Timeblock>
                </Timeline>
            </Block>
          </div>
        </section>
    )
  }
}
