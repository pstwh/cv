import React from 'react'

export default props => (
  <div class="masonry__brick">
      <div class="item-folio">

          <div class="item-folio__thumb">
              <a href={props.image} class="thumb-link" title="The Beetle Car" data-size="1050x700">
                  <img src={props.image}
                       srcset={`${props.image} 1x, ${props.image} 2x`} alt=""/>
                  <span class="shadow-overlay"></span>
              </a>
          </div>

          <div class="item-folio__text">
              <h3 class="item-folio__title">
                  {props.title}
              </h3>
              <p class="item-folio__cat">
                  {props.subtitle}
              </p>
          </div>

          <a href={props.href} class="item-folio__project-link" title="Link do projeto">
              <i class="im im-link"></i>
          </a>

          <div class="item-folio__caption">
              <p>{props.text}</p>
          </div>

      </div>
  </div>
)
