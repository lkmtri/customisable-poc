import React from 'react'
import styled from 'styled-components'
import Section from 'components/base/Section'
import { DisplayText, Subheading, TextStyle } from 'components/base/Typo'
import schema from './schema'

const PromotionContainer = styled(Section.Container)`
  padding: 0 0 50px 0;
`

const HeadingText = styled(DisplayText)`
  margin-bottom: 10px;
`

const PromotionCard = styled.div`
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
  }
`

class Promotion extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = []

  render () {
    const { customisation } = this.props
    const { settings, blocks, blocksOrder } = customisation

    return (
      <Section>
        <PromotionContainer>
          <HeadingText>
            {settings.heading}
          </HeadingText>
          {blocksOrder.map((blockId) => {
            const block = blocks[blockId]
            return (
              <PromotionCard>
                <Subheading>{block.settings.title}</Subheading>
                <TextStyle>{block.settings.content}</TextStyle>
              </PromotionCard>
            )
          })}
        </PromotionContainer>
      </Section>
    )
  }
}

export default Promotion
