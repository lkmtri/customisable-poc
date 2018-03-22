import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'routes'
import withRouter from 'decorators/withRouter'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    this.listenForMessageFromParentFrame()
    this.listenForRouteChange()
  }

  listenForRouteChange = () => {
    Router.onRouteChangeComplete = () => {
      const { route } = this.props
      this.sendMessageToParentFrame({
        type: '@@preview/UPDATE_NEXT_FRAME_URL',
        payload: route.page || 'index'
      })
    }
  }

  listenForMessageFromParentFrame = () => {
    const { dispatch, route } = this.props
    if (!route.preview) return
    window !== undefined && window.addEventListener('message', function (event) {
      dispatch(event.data)
    })
  }

  sendMessageToParentFrame = (message) => {
    const { route } = this.props
    if (route.preview && window !== undefined) {
      window.parent.postMessage(message, 'http://oms.localhost')
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default connect()(withRouter(FrameConnector))
