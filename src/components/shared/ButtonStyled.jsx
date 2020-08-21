import styled from 'styled-components'

export const ButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: ${p => `2px solid ${p.background}`};
  margin: 10px 10px;
  padding: 0.25em 1em;
  color: ${p => p.color};
`
