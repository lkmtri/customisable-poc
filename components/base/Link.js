import React from 'react'
import { Router } from 'routes'

class Link extends React.PureComponent {
  static defaultProps = {
    onClick: () => {}
  }

  handleOnClick = () => {
    const { href, onClick } = this.props
    Router.pushRoute(href)
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
