import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import FlipMove from 'react-flip-move'
import withRedux from 'decorators/withRedux'
import { RouteProvider } from 'decorators/withRouter'
import { isArray } from 'tools/array'
import { getPageSections } from 'tools/customisation'
import { actions, storeKeys } from 'redux-store'
import SocketConnector from 'containers/SocketConnector'
import FrameConnector from 'containers/FrameConnector'
import Section from 'containers/Section'

const isServer = typeof window === 'undefined'

const safeComponent = (Component) => Component || (() => null)

const ExternalConnectors = ({ children }) => (
  <SocketConnector>
    <FrameConnector>
      {children}
    </FrameConnector>
  </SocketConnector>
)

const createPage = (PageComponent) =>
  connect((state) => ({ customisation: state[storeKeys.customisation] }))(
    class Page extends React.PureComponent {
      // Load common resources for pages here
      static async getInitialProps (context) {
        const initialProps = typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(context)
          : {}
        // Load theme to the redux store (on server only)
        const { preview: previewToken } = context.query
        if (previewToken) {
          isServer && await context.store.dispatch(actions[storeKeys.customisation].loadPreviewThemeAction({ previewToken }))
        } else {
          isServer && await context.store.dispatch(actions[storeKeys.customisation].loadThemeAction({ merchantId: '12345' }))
        }

        return {
          ...initialProps,
          customisation: context.store.getState()[storeKeys.customisation]
        }
      }

      getPageSections = () => {
        const { url, customisation } = this.props
        const { sectionSettingData } = customisation
        const currentPath = isArray(url.query.path) ? url.query.path : [url.query.path]
        const currentPage = currentPath[0] || 'index'
        return getPageSections(currentPage, sectionSettingData) || []
      }

      render () {
        const { url, customisation } = this.props
        const { themeSettingData } = customisation
        const HeaderSection = safeComponent(Section.header)
        const FooterSection = safeComponent(Section.footer)
        const pageSections = this.getPageSections()
        return (
          <ThemeProvider theme={themeSettingData}>
            <RouteProvider query={url.query}>
              <ExternalConnectors>
                <HeaderSection id='header' />
                <FlipMove duration={350} easing='ease-out'>
                  {pageSections.map(section => {
                    const SectionComponent = safeComponent(Section[section.type])
                    return <SectionComponent id={section.key} key={section.key} />
                  })}
                </FlipMove>
                <FooterSection id='footer' />
              </ExternalConnectors>
            </RouteProvider>
          </ThemeProvider>
        )
      }
    }
  )

export default (wrappedComponent) => {
  const Page = createPage(wrappedComponent)
  return withRedux(Page)
}
