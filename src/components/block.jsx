import React, { Component } from 'react'

export default class Block extends Component {

  render() {

    let params = [
      this.props.col && 'col-'+this.props.col,
      this.props.md  && 'md-'+this.props.md,
      this.props.tab && 'tab-'+this.props.tab,
      this.props.align,
      this.props.textAlign && 'text-'+this.props.textAlign
    ]

    let classes = ''
    params.map(param => {
      classes += param+' '
    })

    return (
      <div class={classes}>
        {this.props.children}
      </div>
    )
  }
}
