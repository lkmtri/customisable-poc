import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions, storeKeys } from 'redux-store'

class FrameConnector extends React.PureComponent {
  componentDidMount () {
    if (window !== undefined) {
      // console.log(this.props)
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
