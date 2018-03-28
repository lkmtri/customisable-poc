import React from 'react'
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
      console.log(data)
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

export default SocketConnector
