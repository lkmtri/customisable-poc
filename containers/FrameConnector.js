import React from 'react'
import { connect } from 'react-redux'
import { Router } from 'routes'
import withRouter from 'decorators/withRouter'
import {
  themeSettingSchema,
  themeSettingData,
  sectionSettingSchema,
  sectionSettingData
} from 'theme-config'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    this.listenForMessageFromParentFrame()
    this.listenForRouteChange()
    this.sendMessageToParentFrame({
      type: '@@customisation/LOAD_THEME',
      payload: {
        themeSettingSchema,
        themeSettingData,
        sectionSettingSchema,
        sectionSettingData
      }
    })
  }

  listenForRouteChange = () => {
    Router.onRouteChangeComplete = (url) => {
      if (url.startsWith('/')) {
        url = url.substr(1)
        if (url === '') url = 'index'
      }
      this.sendMessageToParentFrame({
        type: '@@preview/UPDATE_NEXT_FRAME_URL',
        payload: url
      })
    }
  }

  listenForMessageFromParentFrame = () => {
    const { dispatch } = this.props
    window !== undefined && window.addEventListener('message', function (event) {
      dispatch(event.data)
    })
  }

  sendMessageToParentFrame = (message) => {
    const { route } = this.props
    console.log(route)
    if (route.preview && window !== undefined) {
      window.parent.postMessage(message, 'http://localhost:3000')
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default connect()(withRouter(FrameConnector))
