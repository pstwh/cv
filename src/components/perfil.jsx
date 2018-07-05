import React, { Component } from 'react'
import Social from './social'

export default class Perfil extends Component {

  render() {

    let perfil = {
        title: 'Hello World',
        description: `
        I am Paulo Alves.
        I am a fullstack developer
        artificial intelligence enthusiast.
        `
    }

    return (
      <section id="home" class="s-home page-hero target-section" data-parallax="scroll" data-image-src="images/hero-bg.jpg" data-natural-width="3000" data-natural-height="2000" data-position-y="center">

            <div class="overlay"></div>
            <div class="shadow-overlay"></div>

            <div class="home-content">

                <div class="row home-content__main">

                    <h3>
                      {perfil.title}
                    </h3>

                    <h1>
                      {perfil.description}
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
