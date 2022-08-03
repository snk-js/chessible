import Field from '../field'
import Image from 'next/image'

import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { GameContext } from '@/gameContext/game'
import { IBoardState } from '@/types/chess'
import board from '@/assets/board.png'
import Button from '@/components/button'
import { useState } from 'react'
const GRID = [0, 1, 2, 3, 4, 5, 6, 7]

const BoardFields = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(8, 5vw [grid-start]);
  grid-template-rows: repeat(8, 5vw [grid-start]);
  @media (max-width: 1280px) {
    grid-template-columns: repeat(8, 10vw [grid-start]);
    grid-template-rows: repeat(8, 10vw [grid-start]);
    order: -1;
  }
`

const BackgroundBoard = styled.div`
  position: absolute;
  max-width: 40vw;
  @media (max-width: 1280px) {
    max-width: 80vw;
  }
  background: grey;
  z-index: -1;
`
const Bar = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1rem;
  margin: 0 3rem;
`

const Board = () => {
  const {
    boardState,
    flipBoard,
  }: { boardState: IBoardState; flipBoard: () => void } =
    useContext(GameContext)

  useEffect(() => {}, [])

  const flipBoardSide = () => {
    flipBoard()
  }

  return (
    <>
      <Bar>
        <Button onClick={flipBoard}>flip</Button>
        <Button>reset</Button>
        <Button>hello</Button>
      </Bar>
      <BoardFields className='justify-self-center' flip={flipBoardSide}>
        {/* <BackgroundBoard>
          <Image src={board} alt='' />
        </BackgroundBoard> */}
        <Fields boardState={boardState} />
      </BoardFields>
    </>
  )
}

const Fields = ({ boardState }) => {
  return (
    <>
      {GRID.map((row, i) => {
        return GRID.map((column, j) => {
          const piece = boardState[row][column]
          return (
            <Field
              column={column}
              row={row}
              id={i + j}
              key={i + j}
              piece={piece}
            />
          )
        })
      })}
    </>
  )
}

export default Board
