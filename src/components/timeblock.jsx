import React from 'react'

export default props => (
  <div class="timeline__block">
      <div class="timeline__bullet"></div>
      <div class="timeline__header">
          <p class="timeline__timeframe">{props.period}</p>
          <h3>{props.place}</h3>
          <h5>{props.work}</h5>
      </div>
      <div class="timeline__desc">
        {props.children}
      </div>
  </div>
)
