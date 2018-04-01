import React from 'react'
import styled from 'styled-components'
import { TextContainer, Subheading, TextStyle } from 'components/base/Typo'

const ProducCardContainer = styled.div`
`

const ProductImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${props => `url('${props.src}')`};
  background-size: cover;
  background-position: center;
`

class ProducCard extends React.PureComponent {
  static defaultProps = {
    product: {
      image: 'https://images.asia.finance/contents/images/20180312100451/shutterstock_89116057.jpg',
      name: 'Product name',
      price: '$19.00'
    }
  }

  render () {
    const { className, product } = this.props
    return (
      <ProducCardContainer className={className}>
        <ProductImage src={product.image} />
        <TextContainer>
          <Subheading>{product.name}</Subheading>
          <TextStyle>{product.price}</TextStyle>
        </TextContainer>
      </ProducCardContainer>
    )
  }
}

export default ProducCard
