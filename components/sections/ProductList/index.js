import React from 'react'
import styled from 'styled-components'
// import { storeKeys } from 'redux-store'
import { media } from 'tools/styled'
import Section from 'components/base/Section'
import ProductCard from 'components/snippets/ProductCard'
import schema from './schema.json'

const StyledProductCard = styled(ProductCard)`
  width: 30%;
  margin-bottom: 2rem;
  transition: width 200ms ease-in-out;
  ${media.mobile`width: 100%;`}
`

const Container = styled(Section.Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 0;
`

class ProductList extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ ]

  render () {
    return (
      <Section>
        <Container>
          <StyledProductCard />
          <StyledProductCard />
          <StyledProductCard />
          <StyledProductCard />
          <StyledProductCard />
          <StyledProductCard />
        </Container>
      </Section>
    )
  }
}

export default ProductList
