import React from 'react'
import { Router } from 'routes'

class Link extends React.PureComponent {
  static defaultProps = {
    onClick: () => {},
    query: {}
  }

  constructUrl = () => {
    const { href, query } = this.props
    const queries = Object.keys(query)
    return queries.length === 0
      ? href
      : queries.reduce((acc, key, idx) => `${acc}${idx !== 0 ? '&' : ''}${key}=${query[key]}`, `${href}?`)
  }

  handleOnClick = () => {
    const { onClick } = this.props
    const url = this.constructUrl()
    Router.pushRoute(url)
    onClick()
  }

  render () {
    const props = { ...this.props }
    props.onClick = this.handleOnClick

    return (
      <React.Fragment>
        {React.cloneElement(this.props.children, props)}
      </React.Fragment>
    )
  }
}

export default Link
