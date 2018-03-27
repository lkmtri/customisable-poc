import React from 'react'
import NextLink from 'next/link'
import withRouter from 'decorators/withRouter'

class Link extends React.PureComponent {
  static defaultProps = {
    query: {}
  }

  static preservedQuery = [
    'locale',
    'preview'
  ]

  getHref = () => {
    const { href, query } = this.props
    const { route } = this.props
    const path = href.split('/').filter(e => e !== '')
    const prevQuery = Link.preservedQuery.reduce((acc, cur) => {
      acc[cur] = route[cur]
      return acc
    }, {})
    const res = {
      pathname: '/',
      query: {
        ...prevQuery,
        ...query,
        path
      }
    }
    return res
  }

  getAsHref = () => {
    const { href, query } = this.props
    const { route } = this.props
    const nextQuery = typeof query === 'function' ? query(route) : query
    const locale = nextQuery.locale || 'en_SG'
    return `/${locale}${href}`
  }

  render () {
    const href = this.getHref()
    const asHref = this.getAsHref()

    return (
      <NextLink {...this.props} href={href} as={asHref}>
        {this.props.children}
      </NextLink>
    )
  }
}

export default withRouter(Link)
