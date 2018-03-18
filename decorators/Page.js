import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import withRedux from 'decorators/withRedux'
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
          customisation: context.store.getState()[storeKeys.customisation].toJS()
        }
      }

      render () {
        const { customisation } = this.props
        const { sectionSettingData, themeSettingData } = customisation
        const HeaderSection = Section.header
        const FooterSection = Section.footer

        return (
          <ThemeProvider theme={themeSettingData}>
            <FrameConnector>
              <HeaderSection id='header' {...sectionSettingData.sections.header.settings} />
              {getPageSections(PageComponent.pageName, sectionSettingData).map(section => {
                const SectionComponent = Section[section.type]
                return <SectionComponent id={section.key} key={section.key} {...section.settings} />
              })}
              <FooterSection id='footer' {...sectionSettingData.sections.footer.settings} />
            </FrameConnector>
          </ThemeProvider>
        )
      }
    }
  )

export default (wrappedComponent) => {
  const Page = createPage(wrappedComponent)
  return withRedux(Page)
}
