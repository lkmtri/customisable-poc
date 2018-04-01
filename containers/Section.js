import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import withRouter from 'decorators/withRouter'
import { actions, storeKeys } from 'redux-store'
import sectionComponents from 'components/sections'

const defaultCustomisationProps = {
  settings: {},
  blocks: {},
  blocksOrder: []
}

const connectedSectionComponent = sectionComponents.reduce(
  (acc, component) => {
    const storeKeysToSubscribe = component.storeKeysToSubscribe
    const mapStateToProps = (state, ownProps) => {
      const props = component.storeKeysToSubscribe.reduce((acc, storeKey) => ({ ...acc, [storeKey]: state[storeKey] }), {})
      const customisation = state[storeKeys.customisation].sectionSettingData.sections[ownProps.id] || defaultCustomisationProps
      const customisationProps = { customisation }
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
