import React, { Component } from 'react'

export default class Social extends Component {

  render() {
    return (
      <ul class="home-social">
          <li>
              <a href="#"><i class="im im-facebook" aria-hidden="true"></i><span>Facebook</span></a>
          </li>
          <li>
              <a href="#"><i class="im im-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
          </li>
          <li>
              <a href="#"><i class="im im-instagram" aria-hidden="true"></i><span>Instagram</span></a>
          </li>
          <li>
              <a href="#"><i class="im im-behance" aria-hidden="true"></i><span>Behance</span></a>
          </li>
          <li>
              <a href="#"><i class="im im-pinterest" aria-hidden="true"></i><span>Pinterest</span></a>
          </li>
      </ul>
    )
  }
}
