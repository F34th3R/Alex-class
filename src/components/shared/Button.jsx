import React from 'react'
// import './Button.css'

export const tema = 'DarkMode'
const verbo = 'Correr'

export const Button = ({ content, background }) => {
  const message = `Esta lloviendo! ${content} ${tema} ${verbo}`
  
  const onClickHandler = () => {
    // console.log('Esta lloviendo! ' + content + ' ' + tema + ' ' + verbo)
    console.log(message)
  }

  return (
    <button className={background} onClick={onClickHandler}>{content || 'Button'}</button>
  )
}
