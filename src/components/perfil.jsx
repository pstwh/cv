import React, { Component } from 'react'
import Social from './social'

export default class Perfil extends Component {

  render() {
      return (
        <section id="home" class="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center">

              <div class="overlay"></div>
              <div class="shadow-overlay"></div>

              <div class="home-content">

                  <div class="row home-content__main">

                      <h3>Hello World</h3>

                      <h1>
                          I am Paulo Alves. <br/>
                          I am a fullstack developer <br/>
                          artificial intelligence enthusiast.
                      </h1>

                      <div class="home-content__buttons">
                          <a href="#works" class="smoothscroll btn btn--stroke">
                              Latest Projects
                          </a>
                          <a href="#about" class="smoothscroll btn btn--stroke">
                              More About Me
                          </a>
                      </div>

                      <div class="home-content__scroll">
                          <a href="#about" class="scroll-link smoothscroll">
                              <span>Scroll Down</span>
                          </a>
                      </div>

                  </div>

              </div>

              <Social/>

          </section>
      )
  }
}
