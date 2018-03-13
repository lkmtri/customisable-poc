import React from 'react'
import schema from './schema'
import { storeKeys } from 'redux-store' // TODO: Decide on where to import storeKeys from

class Header extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ storeKeys.customisation ]

  render () {
    return (
      <div>Header</div>
    )
  }
}

export default Header
