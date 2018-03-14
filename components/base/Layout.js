import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: -2rem;
  margin-left: -2rem;
`

Layout.Section = styled.div`
  max-width: calc(100%-2rem);
  margin-top: 2rem;
  margin-left: 2rem;
`

export default Layout
