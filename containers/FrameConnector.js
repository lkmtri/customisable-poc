import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'
import {
  themeSettingSchema,
  themeSettingData,
  sectionSettingSchema,
  sectionSettingData
} from 'theme-config'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    if (window !== undefined) {
      window.parent.postMessage({
        type: '@@customisation/LOAD_THEME',
        payload: {
          themeSettingSchema,
          themeSettingData,
          sectionSettingSchema,
          sectionSettingData
        }
      }, 'http://localhost:3000')

      const { dispatch } = this.props

      window.addEventListener('message', function (event) {
        dispatch(event.data)
      })

      Router.onRouteChangeComplete = (url) => {
        if (url.startsWith('/')) {
          url = url.substr(1)
          if (url === '') url = 'index'
        }
        window.parent.postMessage({
          type: '@@preview/UPDATE_NEXT_FRAME_URL',
          payload: url
        }, 'http://localhost:3000')
      }
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default connect()(FrameConnector)
