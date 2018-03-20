import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import FlipMove from 'react-flip-move'
import withRedux from 'decorators/withRedux'
import { RouterProvider } from 'decorators/withRouter'
import { getPageSections } from 'tools/customisation'
import { actions, storeKeys } from 'redux-store'
import FrameConnector from 'containers/FrameConnector'
import Section from 'containers/Section'

const createPage = (PageComponent) =>
  connect((state) => ({ customisation: state[storeKeys.customisation].toJS() }))(
    class Page extends React.PureComponent {
      // Load common resources for pages here
      static async getInitialProps (context) {
        const initialProps = typeof PageComponent.getInitialProps === 'function'
          ? await PageComponent.getInitialProps(context)
          : {}
        // Load theme to the redux store
        await context.store.dispatch(actions[storeKeys.customisation].loadThemeAndSectionSettings())
        return {
          ...initialProps,
          query: context.query,
          currentPage: context.query.page,
          customisation: context.store.getState()[storeKeys.customisation].toJS()
        }
      }

      render () {
        const { url, customisation } = this.props
        const { sectionSettingData, themeSettingData } = customisation
        const HeaderSection = Section.header
        const FooterSection = Section.footer
        const currentPage = url.query.page || 'index'

        return (
          <ThemeProvider theme={themeSettingData}>
            <RouterProvider query={url.query}>
              <FrameConnector>
                <HeaderSection id='header' {...sectionSettingData.sections.header.settings} />
                <FlipMove duration={350} easing='ease-out'>
                  {getPageSections(currentPage, sectionSettingData).map(section => {
                    const SectionComponent = Section[section.type]
                    return <SectionComponent id={section.key} key={section.key} {...section.settings} />
                  })}
                </FlipMove>
                <FooterSection id='footer' {...sectionSettingData.sections.footer.settings} />
              </FrameConnector>
            </RouterProvider>
          </ThemeProvider>
        )
      }
    }
  )

export default (wrappedComponent) => {
  const Page = createPage(wrappedComponent)
  return withRedux(Page)
}
