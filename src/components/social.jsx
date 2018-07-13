import React, { Component } from 'react'

export default class Social extends Component {

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
        href: "https://github.com/pstw",
        icon: "im im-github",
        text: "Github"
      },
    ]

    return (
      <ul class="home-social">
        {socials.map(social =>
          <li>
              <a target="_blank"
                 href={social.href}>
                <i class={social.icon}
                   aria-hidden="true"/>
                <span>{social.text}</span>
              </a>
          </li>
        )}
      </ul>
    )
  }
}
