import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import withRouter from 'decorators/withRouter'
import config from 'config'
import { isArray } from 'tools/array'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    this.listenForMessageFromParentFrame()
    this.listenForRouteChange()
  }

  listenForRouteChange = () => {
    Router.onRouteChangeComplete = () => {
      const { route } = this.props
      const path = isArray(route.path) ? route.path : [route.path]
      this.sendMessageToParentFrame({
        type: '@@preview/UPDATE_NEXT_FRAME_URL',
        payload: path[0] || 'index'
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
      window.parent.postMessage(message, config.customisationUIBaseUrl)
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default connect()(withRouter(FrameConnector))
