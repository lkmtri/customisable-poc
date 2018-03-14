import React from 'react'
import styled from 'styled-components'
import { storeKeys } from 'redux-store'
import Section from 'components/base/Section'
import ProductCard from 'components/snippets/ProductCard'
import schema from './schema'

const StyledProductCard = styled(ProductCard)`
  width: 30%;
`

const Container = styled(Section.Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 50px 0;
`

class ProductList extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = [ storeKeys.customisation ]

  render () {
    return (
      <Section>
        <Container>
          <StyledProductCard />
          <StyledProductCard />
          <StyledProductCard />
        </Container>
      </Section>
    )
  }
}

export default ProductList
