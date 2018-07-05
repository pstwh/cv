import React, { Component } from 'react'
import Block from './block'

export default class Content extends Component {

  render() {

      let title = "Howdy!"

      let content = `
      Lorem ipsum Ut eiusmod ex magna sit dolor esse adipisicing minim ad cupidatat eu veniam nostrud mollit laboris sunt magna velit culpa consectetur nostrud consectetur labore sed do.

      Lorem ipsum Nisi officia Duis irure voluptate dolor commodo pariatur occaecat aliquip adipisicing voluptate Ut in qui ea sint occaecat in commodo in in in incididunt ut sunt in Ut Duis in ut ex qui anim cupidatat cupidatat ex in non dolore labore ea amet cillum ea qui dolor nisi sed velit mollit exercitation ex fugiat labore in deserunt culpa laborum culpa anim dolore laboris amet irure mollit proident velit fugiat aute ea elit magna consequat qui officia quis elit Duis dolor esse cupidatat tempor proident voluptate aliqua ex cupidatat do eiusmod veniam irure laborum ut magna nostrud dolore ullamco commodo elit sit magna aliqua laborum veniam officia dolor.
      `

      return(
        <Block col="six" tab="full" align="left">
            <h3>{title}</h3>
            <p>{content}</p>
        </Block>
      )
  }
}
