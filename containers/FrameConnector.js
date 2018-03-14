import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions, storeKeys } from 'redux-store'
import {
  themeSettingSchema,
  themeSettingData,
  sectionSettingSchema,
  sectionSettingData
} from 'customisation'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    if (window !== undefined) {
      window.parent.postMessage({
        themeSettingSchema,
        themeSettingData,
        sectionSettingSchema,
        sectionSettingData
      }, 'http://localhost:3000')

      window.addEventListener('message', function (event) {
        // dispatch(actions)
        console.log(event.data)
      })
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...actions[storeKeys.customisation] }, dispatch)

export default connect(null, mapDispatchToProps)(FrameConnector)
