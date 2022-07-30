import Piece from '../piece'
import Image from 'next/image'

import styled from 'styled-components'

import board from '@/assets/board.png'

const BoardFields = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(8, 5vw [grid-start]);
  grid-template-rows: repeat(8, 5vw [grid-start]);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(8, 10vw [grid-start]);
    grid-template-rows: repeat(8, 10vw [grid-start]);
  }
`

const BackgroundBoard = styled.div`
  position: absolute;
  max-width: 80vw;
  top: 2rem;
  background: grey;
  z-index: -1;
`

const Board = () => {
  return (
    <>
      <BackgroundBoard>
        <Image src={board} alt='' />
      </BackgroundBoard>
      <BoardFields>
        {Array(64)
          .fill(1)
          .map((field, i) => {
            return <Piece key={i}></Piece>
          })}
      </BoardFields>
    </>
  )
}

export default Board
