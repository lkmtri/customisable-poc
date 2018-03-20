import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRouter from 'decorators/withRouter'
import { actions, storeKeys } from 'redux-store'
import sectionComponents from 'components/sections'

const connectedSectionComponent = sectionComponents.reduce(
  (acc, component) => {
    const storeKeysToSubscribe = component.storeKeysToSubscribe
    const mapStateToProps = (state, ownProps) => {
      const props = component.storeKeysToSubscribe.reduce((acc, storeKey) => ({ ...acc, [storeKey]: state[storeKey].toJS() }), {})
      const customisationProps = {
        customisation: state[storeKeys.customisation].toJS().sectionSettingData.sections[ownProps.id]
      }
      return { ...ownProps, ...props, ...customisationProps }
    }
    const mapDispatchToProps = (dispatch) => bindActionCreators(storeKeysToSubscribe.reduce((acc, storeKey) => ({ ...acc, ...actions[storeKey] }), {}), dispatch)
    const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(withRouter(component))
    connectedComponent.schema = component.schema
    return {
      ...acc,
      [component.schema.type]: connectedComponent
    }
  }, {}
)

export default connectedSectionComponent
