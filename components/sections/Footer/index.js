import React from 'react'
import styled from 'styled-components'
import Section from 'components/base/Section'
import { TextStyle } from 'components/base/Typo'

import schema from './schema'

const StyledSection = styled(Section)`
  border-top: 2px #39CCCC solid;
`
StyledSection.Container = styled(Section.Container)`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FooterMenu = styled.div`
  display: flex;
`

const FooterMenuText = styled(TextStyle)`
  color: #39CCCC;
  padding: 1rem;
`

class Footer extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ ]

  render () {
    return (
      <StyledSection>
        <StyledSection.Container>
          <FooterMenu>
            <FooterMenuText>About us</FooterMenuText>
            <FooterMenuText>Careers</FooterMenuText>
            <FooterMenuText>Contact us</FooterMenuText>
          </FooterMenu>
        </StyledSection.Container>
      </StyledSection>
    )
  }
}

export default Footer
