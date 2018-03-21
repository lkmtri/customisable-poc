import React from 'react'
import { Router } from 'routes'
import withRouter from 'decorators/withRouter'

class Link extends React.PureComponent {
  static defaultProps = {
    onClick: () => {},
    query: {}
  }

  componentDidMount () {
    const { prefetch } = this.props
    prefetch && this.prefetchRoute()
  }

  prefetchRoute = () => {
    const url = this.constructUrl()
    Router.prefetchRoute(url)
  }

  constructUrl = () => {
    const { href, query, route } = this.props
    // preserve preview querystring
    if (route.preview) query.preview = route.preview
    let queries = query
    if (typeof query === 'function') {
      route.page && delete route.page
      route.param && delete route.param
      queries = query(route)
    }
    const queriesKeys = Object.keys(queries)
    return queriesKeys.length === 0
      ? href
      : queriesKeys.reduce(
        // remove undefined querystring from url
        (acc, key, idx) => queries[key] !== undefined ? `${acc}${idx !== 0 ? '&' : ''}${key}=${queries[key]}` : acc,
        `${href}?`
      )
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
