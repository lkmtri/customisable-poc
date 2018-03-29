import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import withRouter from 'decorators/withRouter'
import config from 'config'
import { isArray } from 'tools/array'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    // only connect to parent in preview mode
    if (!this.props.route.preview) return
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
    window.addEventListener('message', this.dispatchActionFromParentFrame)
  }

  componentWillUnmount () {
    if (!this.props.route.preview) return
    window.removeEventListener('message', this.dispatchActionFromParentFrame)
  }

  dispatchActionFromParentFrame = (event) => {
    const { dispatch, route } = this.props
    // TODO: Find a better way to change page
    if (event.data.type === '@@preview/CHANGE_PAGE') {
      Router.push({
        pathname: '/',
        query: {
          path: [event.data.payload],
          preview: route.preview
        }
      })
      return
    }
    dispatch(event.data)
  }

  sendMessageToParentFrame = (message) => {
    const { route } = this.props
    if (route.preview && window !== undefined) {
      window.parent.postMessage(message, config.customisationUIBaseUrl)
    }
  }

  render () {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}

export default connect()(withRouter(FrameConnector))
