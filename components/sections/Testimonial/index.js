import React from 'react'
import styled from 'styled-components'
import { media } from 'tools/styled'
import Section from 'components/base/Section'
import { DisplayText, Subheading, TextStyle } from 'components/base/Typo'
import schema from './schema'

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  ${media.mobile`justify-content: flex-start;`}
`

const TestimonialCard = styled.div`
  width: 30%;
  margin-bottom: 20px;
  ${media.mobile`width: 100%;`}
`

const TestimonialContainer = styled(Section.Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px 0 50px 0;
`

class Testimonial extends React.PureComponent {
  static schema = schema

  static storeKeysToSubscribe = []

  render () {
    const { customisation } = this.props
    const { settings, blocks, blocksOrder } = customisation

    return (
      <Section>
        <Section.Container>
          <HeadingContainer>
            <DisplayText>{settings.heading}</DisplayText>
          </HeadingContainer>
        </Section.Container>
        <Section.Container>
          <TestimonialContainer>
            {blocksOrder.map((blockId) => {
              const block = blocks[blockId]
              const data = block.settings
              return (
                <TestimonialCard key={blockId}>
                  <Subheading>{data.author}</Subheading>
                  <TextStyle>{data.content}</TextStyle>
                </TestimonialCard>
              )
            })}
          </TestimonialContainer>
        </Section.Container>
      </Section>
    )
  }
}

export default Testimonial
