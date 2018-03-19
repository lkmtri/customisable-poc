import React from 'react'
import Router from 'next/router'

class Link extends React.PureComponent {
  static defaultProps = {
    onClick: () => {}
  }

  handleOnClick = () => {
    const { href, onClick, as = href } = this.props
    Router.push(href, as)
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
