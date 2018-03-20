import React from 'react'
import { Router } from 'routes'
import withRouter from 'decorators/withRouter'

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
    const url = this.constructUrl()
    Router.pushRoute(url)
  }

  getCurrentPath = () => {
    const { route } = this.props
    const { page = '', param } = route
    return `/${page}${param ? `/${param}` : ''}`
  }

  render () {
    const { children, href } = this.props
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { onClick: this.handleOnClick, displaying: this.getCurrentPath() === href }))
    return (
      <React.Fragment>
        {childrenWithProps}
      </React.Fragment>
    )
  }
}

export default withRouter(Link)
