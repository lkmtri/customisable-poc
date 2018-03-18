import React from 'react'
import { css } from 'styled-components'

const e = React.createElement

export const componentFromProps = (defaultTag = 'div') => ({ element = defaultTag, children, ...props }) => e(element, props, children)

const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 400
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
