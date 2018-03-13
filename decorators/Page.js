import React from 'react'
import { ThemeProvider } from 'styled-components'
import withRedux from 'decorators/withRedux'
import { actions, storeKeys } from 'redux-store'
import FrameConnector from 'containers/FrameConnector'

const createPage = (PageComponent) =>
  class Page extends React.PureComponent {
    // Load common resources for pages here
    static async getInitialProps (context) {
      const pageInitialProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context)
        : {}
      // Load theme to the redux store
      await context.store.dispatch(actions[storeKeys.customisation].loadThemeAndSectionSettings())
      return {
        ...pageInitialProps,
        dispatch: context.store.dispatch,
        customisation: context.store.getState()[storeKeys.customisation]
      }
    }

    render () {
      const { customisation } = this.props
      return (
        <ThemeProvider theme={customisation}>
          <FrameConnector>
            <PageComponent {...this.props} />
          </FrameConnector>
        </ThemeProvider>
      )
    }
  }

export default (wrappedComponent) => {
  const Page = createPage(wrappedComponent)
  return withRedux(Page)
}
