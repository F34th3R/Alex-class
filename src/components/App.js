import React from 'react' 
import { Button, tema } from './shared/Button'
import { ButtonStyled } from './shared/ButtonStyled'

// Arrow Function 
export const App = () => {
  return (
    <>
      <div>{tema}</div>
      <Button background="btn-bg-purple-navy" content="Hola"/>
      <Button background="btn-bg-space" content="save"/>
      <Button content="Hello"/>
      <Button />
      <div>
        <ButtonStyled color="#907ad6" background="#907ad6" onClick={() => console.log('Hola soy un boton nuevo')}>New Button</ButtonStyled>
      </div>
      <div>
        <ButtonStyled color="#7fdeff" background="#7fdeff" onClick={() => console.log('Hola soy un boton nuevo')}>Hi</ButtonStyled>
      </div>
    </>
  )
}

// Normal Function
// function App() {
//   return (

//   )
// }