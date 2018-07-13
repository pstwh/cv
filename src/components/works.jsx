import React, { Component } from 'react'
import Work from './work'

export default class Works extends Component {

  render() {
    const jobs = [
      {
        image: "https://camo.githubusercontent.com/0c0274a4be819c4242993a5b0181b39e6eb6ec72/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f35384667706e524147573542676a7a5031712f67697068792e676966",
        title: "The Beetle",
        subtitle: "Web Development",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "https://camo.githubusercontent.com/73f31349c172ceffabb5083f76ef2f2acee3d904/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32736a77434843624e38337955414d4f38672f67697068792e676966",
        title: "The Beetle",
        subtitle: "Web Development",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "images/portfolio/gallery/g-beetle.jpg",
        title: "The Beetle",
        subtitle: "Web Development",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      },
      {
        image: "images/portfolio/gallery/g-beetle.jpg",
        title: "The Beetle",
        subtitle: "Web Development",
        href: "https://www.behance.net/",
        text: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
      }
    ]

    return (
      <section id="works" class="s-works target-section">
        <div class="row narrow section-intro has-bottom-sep">
            <div class="col-full">
                <h3>Portfolio</h3>
                <h1>Meus últimos projetos</h1>

                <p class="lead">Aqui constam alguns dos últimos projetos, sendo misturados os pessoais, os de aprendizado e os feitos em empresas.</p>
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
