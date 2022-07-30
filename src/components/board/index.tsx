import Piece from '../field'
import Image from 'next/image'

import styled from 'styled-components'
import { useContext, useEffect } from 'react'
import { GameContext } from '@/contexts/game'
import { BoardState } from '@/types/chess'
import board from '@/assets/board.png'
import Button from '@/components/button'

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
  transform: translate(0, -2.2rem);
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 1rem;
  margin: 0 0;
`

const Board = () => {
  const { boardState }: { boardState: BoardState } = useContext(GameContext)

  useEffect(() => {}, [])

  return (
    <>
      <BoardFields className='justify-self-center'>
        <BackgroundBoard>
          <Image src={board} alt='' />
        </BackgroundBoard>
        <Bar>
          <Button>reverse</Button>
          <Button>reset</Button>
          <Button>hello</Button>
        </Bar>
        {GRID.map((row, i) => {
          return GRID.map((column, j) => {
            return (
              <Piece
                column={column}
                row={row}
                key={i + j}
                value={boardState[row][column]}
              ></Piece>
            )
          })
        })}
      </BoardFields>
    </>
  )
}

export default Board
