import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from 'redux-store'
import sectionComponents from 'components/sections'

const connectedSectionComponent = sectionComponents.reduce(
  (acc, component) => {
    const storeKeysToSubscribe = component.storeKeysToSubscribe
    const mapStateToProps = (state) => component.storeKeysToSubscribe.reduce((acc, storeKey) => ({ ...acc, [storeKey]: state[storeKey] }), {})
    const mapDispatchToProps = (dispatch) => bindActionCreators(storeKeysToSubscribe.reduce((acc, storeKey) => ({ ...acc, ...actions[storeKey] }), {}), dispatch)
    return {
      ...acc,
      [component.schema.name]: connect(mapStateToProps, mapDispatchToProps)(component)
    }
  }, {}
)

export default connectedSectionComponent
