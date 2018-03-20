import React from 'react'
import styled from 'styled-components'
import { media } from 'tools/styled'
import Link from 'components/base/Link'
import Section from 'components/base/Section'
import { DisplayText, TextStyle } from 'components/base/Typo'
import schema from './schema'

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
  ${media.mobile`font-size: 2.3rem;`}
`

const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.mobile`display: none;`}
`

const HeaderMenuText = styled(TextStyle)`
  color: white;
  padding-left: 1rem;
  cursor: pointer;
`

const HambugerMenu = styled.div`
  display: none;
  height: 25px;
  width: 25px;
  background: repeating-linear-gradient(
    #fff,
    #fff 5px,
    #39CCCC 5px,
    #39CCCC 10px
  );
  cursor: pointer;
  ${media.mobile`display: block;`}
`

const MobileMenu = styled.div`
  display: none;
  height: ${props => props.show ? '140px' : '0px'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7FDBFF;
  transition: height 200ms ease-in-out;
  overflow: hidden;
  ${media.mobile`display: flex;`}
`

const MobileMenuText = styled(HeaderMenuText)`
  margin: 0.3rem;
`

class Header extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ ]

  state = {
    showMobileMenu: false
  }

  toggleMobileMenu = () => this.setState({ showMobileMenu: !this.state.showMobileMenu })

  render () {
    const { customisation } = this.props
    const { showMobileMenu } = this.state
    console.log(this.props)
    return (
      <StyledSection>
        <StyledSection.Container>
          <Logo>{customisation.settings.logo || 'page'}</Logo>
          <HeaderMenu>
            <Link href='/'>
              <HeaderMenuText>Home</HeaderMenuText>
            </Link>
            <HeaderMenuText>Menu</HeaderMenuText>
            <Link href='/promotion'>
              <HeaderMenuText>Promotions</HeaderMenuText>
            </Link>
            <HeaderMenuText>Store information</HeaderMenuText>
          </HeaderMenu>
          <HambugerMenu onClick={this.toggleMobileMenu} />
        </StyledSection.Container>
        <MobileMenu show={showMobileMenu}>
          <Link href='/' as='index'>
            <MobileMenuText>Home</MobileMenuText>
          </Link>
          <MobileMenuText>Menu</MobileMenuText>
          <Link href='/promotion'>
            <MobileMenuText>Promotions</MobileMenuText>
          </Link>
          <MobileMenuText>Store information</MobileMenuText>
        </MobileMenu>
      </StyledSection>
    )
  }
}

export default Header
