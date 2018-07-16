import React, { Component } from 'react'

export default class Footer extends Component {

  render() {

    const socials = [
      {
        href: "https://www.facebook.com/profile.php?id=100004021432614",
        icon: "im im-facebook",
        text: "Facebook"
      },
      {
        href: "https://twitter.com/pstwh",
        icon: "im im-twitter",
        text: "Twitter"
      },
      {
        href: "https://www.linkedin.com/in/paulo-alves-246080161",
        icon: "im im-linkedin",
        text: "Linkedin"
      },
      {
        href: "https://github.com/pstwh",
        icon: "im im-github",
        text: "Github"
      },
    ]

    return(
      <footer>
        <div class="row">
            <div class="col-full">

                <ul class="footer-social">
                  {socials.map(social =>
                    <li>
                      <a href={social.href}>
                          <i class={social.icon} aria-hidden="true"></i>
                          <span>{social.text}</span>
                      </a>
                    </li>
                  )}
                </ul>

            </div>
        </div>

        <div class="row footer-bottom">

            <div class="col-twelve">
                <div class="copyright">
                    <span>© Paulo Alves - 2018</span>
                    <span>Componentizado e customizado a partir do layout <a href="https://www.styleshout.com/">hola</a></span>
                </div>


                <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top"><i class="im im-arrow-up" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}
