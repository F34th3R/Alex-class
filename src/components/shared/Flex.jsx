import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  flex-flow: ${props => props.flexFlow};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
