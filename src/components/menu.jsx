import React, { Component } from 'react'


export default class Menu extends Component {
  render() {

    let current = 'home'
    let menus = [
      {
        content: 'Home',
        title: 'home',
        href: '#home',
      },
      {
        content: 'About',
        title: 'about',
        href: '#about',
      },
      {
        content: 'Works',
        title: 'works',
        href: '#works',
      },
      {
        content: 'Blog',
        title: 'blog',
        href: '#blog',
      },
      {
        content: 'Contact',
        title: 'contact',
        href: '#contact',
      },
    ]

    return (
      <div class="s-header">

          {/*
          <div class="header-logo">
              <a class="site-logo" href="index.html"><img src="../images/logo.png" alt="Homepage"/></a>
          </div>
          {*/}

          <nav class="header-nav-wrap">
              <ul class="header-nav">
                {menus.map((menu) => (
                  <li class={menu.title == current && "current"}>
                    <a href={menu.href} title={menu.title}>{menu.content}</a>
                  </li>
                ))}
              </ul>
          </nav>

          <a class="header-menu-toggle" href="#0"><span>Menu</span></a>

      </div>
    )
  }
}
