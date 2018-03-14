import React from 'react'
import { ThemeProvider } from 'styled-components'
import withRedux from 'decorators/withRedux'
import { getPageSections } from 'tools/customisation'
import { actions, storeKeys } from 'redux-store'
import FrameConnector from 'containers/FrameConnector'
import Section from 'containers/Section'

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
      const { sectionSettings, themeSettings } = customisation
      // console.log(customisation)
      // console.log(getPageSections(PageComponent.pageName, sectionSettings))
      return (
        <ThemeProvider theme={themeSettings}>
          <FrameConnector>
            {getPageSections(PageComponent.pageName, sectionSettings).map(section => {
              const SectionComponent = Section[section.type]
              return <SectionComponent key={section.key} {...section.settings} />
            })}
          </FrameConnector>
        </ThemeProvider>
      )
    }
  }

export default (wrappedComponent) => {
  const Page = createPage(wrappedComponent)
  return withRedux(Page)
}
