import React from 'react'
import styled from 'styled-components'
import { media } from 'tools/styled'
import Section from 'components/base/Section'
import schema from './schema'

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: height 200ms ease-in-out;
  ${media.mobile`height: 300px;`}
`

class BannerImage extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ ]

  render () {
    const { customisation } = this.props

    return (
      <Section>
        <Image src={customisation.settings.image || 'https://images.asia.finance/contents/images/20180312100451/shutterstock_89116057.jpg'} />
      </Section>
    )
  }
}

export default BannerImage
