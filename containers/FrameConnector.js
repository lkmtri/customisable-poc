import React from 'react'
import { connect } from 'react-redux'
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
        themeSettingSchema,
        themeSettingData,
        sectionSettingSchema,
        sectionSettingData
      }, 'http://localhost:3000')

      const { dispatch } = this.props

      window.addEventListener('message', function (event) {
        dispatch(event.data)
      })
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

export default connect()(FrameConnector)
