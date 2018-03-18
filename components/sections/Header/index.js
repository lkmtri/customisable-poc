import React from 'react'
import styled from 'styled-components'
import schema from './schema'
import Section from 'components/base/Section'
import { DisplayText, TextStyle } from 'components/base/Typo'

const StyledSection = styled(Section)`
  background-color: #39CCCC;
  color: white;
`
StyledSection.Container = styled(Section.Container)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

const Logo = styled(DisplayText)`
  color: white;
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderMenuText = styled(TextStyle)`
  color: white;
  padding-left: 1rem;
`

class Header extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ ]

  render () {
    const { customisation } = this.props
    return (
      <StyledSection>
        <StyledSection.Container>
          <Logo>{customisation.settings.logo || 'LEGO'}</Logo>
          <HeaderMenu>
            <HeaderMenuText>Home</HeaderMenuText>
            <HeaderMenuText>Menu</HeaderMenuText>
            <HeaderMenuText>Promotions</HeaderMenuText>
            <HeaderMenuText>Store information</HeaderMenuText>
          </HeaderMenu>
        </StyledSection.Container>
      </StyledSection>
    )
  }
}

export default Header
