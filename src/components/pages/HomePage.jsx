import React, { useState } from 'react'
import moreVerticalSVG from '../../assets/svg/more-vertical.svg'
import { Container, Flex, Margin, SVGDisplay, Card } from '../shared'

export const HomePage = () => {
  const [selected, setSelected] = useState(false)

  const onSelectHandler = () => {
    setSelected(true)
  }

  return (
    <Container>
      <Margin value="30px 0">
        <Flex justifyContent="center">
          <h1>Select</h1>
        </Flex>
        <Flex justifyContent="flex-end">
          <Margin value="0 15px">
            <Card>Content</Card>
          </Margin>
          <Card onClick={onSelectHandler}>
            <SVGDisplay svg={moreVerticalSVG} height="24px" width="24px" />
          </Card>
        </Flex>
      </Margin>
    </Container>
  )
}
