import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import FlipMove from 'react-flip-move'
import withRedux from 'decorators/withRedux'
import { RouteProvider } from 'decorators/withRouter'
import { getPageSections } from 'tools/customisation'
import { actions, storeKeys } from 'redux-store'
import FrameConnector from 'containers/FrameConnector'
import Section from 'containers/Section'

const isServer = typeof window === 'undefined'

const safeComponent = (Component) => Component || (() => null)

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

      render () {
        const { url, customisation } = this.props
        const { sectionSettingData, themeSettingData } = customisation
        const HeaderSection = safeComponent(Section.header)
        const FooterSection = safeComponent(Section.footer)
        const currentPage = url.query.page || 'index'

        return (
          <ThemeProvider theme={themeSettingData}>
            <RouteProvider query={url.query}>
              <FrameConnector>
                <HeaderSection id='header' {...sectionSettingData.sections.header.settings} />
                <FlipMove duration={350} easing='ease-out'>
                  {getPageSections(currentPage, sectionSettingData).map(section => {
                    const SectionComponent = safeComponent(Section[section.type])
                    return <SectionComponent id={section.key} key={section.key} {...section.settings} />
                  })}
                </FlipMove>
                <FooterSection id='footer' {...sectionSettingData.sections.footer.settings} />
              </FrameConnector>
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
