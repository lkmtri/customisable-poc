import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actions, storeKeys } from 'redux-store'
import withRouter from 'decorators/withRouter'
import socket from 'socket.io-client'
import config from 'config'

class SocketConnector extends React.PureComponent {
  componentDidMount () {
    this.io = socket(config.customisationUIBaseUrl, {
      path: '/api/subscription'
    })
    this.listenForThemeSchemaUpdate()
  }

  componentWillUnmount () {
    this.io.close()
  }

  listenForThemeSchemaUpdate = () => {
    this.io.on('theme_schema_update', (data) => {
      const { route, saveThemeSchemaUpdateAction } = this.props
      if (route.preview) {
        const {
          themeSettingSchema,
          sectionSettingSchema,
          previewThemeSettings: themeSettings,
          previewSectionSettings: sectionSettings
        } = data
        saveThemeSchemaUpdateAction({
          themeSettingSchema,
          sectionSettingSchema,
          themeSettings,
          sectionSettings
        })
      } else {
        saveThemeSchemaUpdateAction(data)
      }
    })
  }

  render () {
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions[storeKeys.customisation]
}, dispatch)

export default connect(null, mapDispatchToProps)(withRouter(SocketConnector))
