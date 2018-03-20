import React from 'react'
import PropTypes from 'prop-types'

class Route {
  constructor (query) {
    this.query = query
    this.subscriptions = []
  }

  setQuery (query) {
    this.query = query
    this.subscriptions.forEach(f => f(this))
  }

  subscribe (f) {
    this.subscriptions.push(f)
    return () => {
      const idx = this.subscriptions.findIndex(e => e === f)
      idx >= 0 && this.subscriptions.splice(idx, 1)
    }
  }
}

export class RouterProvider extends React.PureComponent {
  static propTypes = {
    query: PropTypes.object.isRequired
  }

  static childContextTypes = {
    route: PropTypes.object
  }

  constructor (props, context) {
    super(props, context)
    this.route = new Route(props.query)
  }

  componentWillReceiveProps (nextProps) {
    this.route.setQuery(nextProps.query)
  }

  getChildContext = () => {
    return {
      route: this.route
    }
  }

  render () {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

export default (WrappedComponent) =>
  class RouterSubsription extends React.Component {
    static contextTypes = {
      route: PropTypes.object
    }

    constructor (props, context) {
      super(props, context)
      this.state = {
        route: context.route
      }
    }

    componentDidMount () {
      this.unsubscribe = this.context.route.subscribe(this.updateRoute)
    }

    componentWillUnmount () {
      this.unsubscribe && this.unsubscribe()
    }

    updateRoute = (route) => {
      this.setState({ route })
    }

    render () {
      const { route } = this.state

      return <WrappedComponent {...this.props} route={route.query} />
    }
  }
