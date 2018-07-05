import React from 'react'
import Content from './content'
import Skills from './skills'

export default props => (
  <section id="about" class="s-about target-section">

        <div class="row narrow section-intro has-bottom-sep">
            <div class="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p class="lead">Lorem ipsum Dolor adipisicing nostrud et aute Excepteur amet commodo ea dolore irure esse Duis nulla sint fugiat cillum ullamco proident aliquip quis qui voluptate dolore veniam Ut laborum non est in officia.</p>
            </div>
        </div>

        <div class="row about-content">
            <Content/>
            <Skills/>
        </div>

        <div class="row about-content about-content--buttons">

            <div class="col-six tab-full left">
                <a href="#0" class="btn btn--primary full-width">Download My CV</a>
            </div>
            <div class="col-six tab-full right">
                <a href="#0" class="btn full-width">Hire Me Now</a>
            </div>

        </div>

        <div class="row about-content about-content--timeline">

            <div class="col-full text-center">
                <h3>Experience.</h3>
            </div>

            <div class="col-six tab-full left">
                <div class="timeline">

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2015 - Present</p>
                            <h3>Awesome Studio</h3>
                            <h5>Lead Designer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2014 - June 2015</p>
                            <h3>Super Cool Agency</h3>
                            <h5>Front-end Developer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div class="col-six tab-full right">
                <div class="timeline">

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2012 - June 2014</p>
                            <h3>Great Design Studio</h3>
                            <h5>Web Designer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div class="timeline__block">
                        <div class="timeline__bullet"></div>
                        <div class="timeline__header">
                            <p class="timeline__timeframe">July 2011 - June 2012</p>
                            <h3>Epic Design Agency</h3>
                            <h5>Web Designer</h5>
                        </div>
                        <div class="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </section>
)