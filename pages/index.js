import React from 'react'
import styled from 'styled-components'
import Page from 'decorators/Page'
import Section from 'containers/Section'

const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

class Index extends React.PureComponent {
  static pageName = 'index'

  render () {
    return (
      <PageContainer>
        <Section.Header />
      </PageContainer>
    )
  }
}

export default Page(Index)
