import Field from '../field'

import styled from 'styled-components'
import { useContext } from 'react'
import { GameContext } from '@/gameContext/game'

import { GameContextFeatures } from '@/gameContext/game'
import Character from '@/models/character'

const GRID = [0, 1, 2, 3, 4, 5, 6, 7]

const BoardFields = styled.div`
  background: #00000080;
  display: grid;
  grid-template-columns: repeat(8, 4.5vw [grid-start]);
  grid-template-rows: repeat(8, 4.5vw [grid-start]);
`
const Menu = styled.div``

const Board = () => {
  const { boardState, flipBoard }: GameContextFeatures = useContext(GameContext)

  const flipBoardSide = () => {
    flipBoard()
  }

  return (
    <>
      <BoardFields className='justify-self-center' flip={flipBoardSide}>
        {/* <BackgroundBoard>
          <Image src={board} alt='' />
        </BackgroundBoard> */}
        <Fields boardState={boardState} />
      </BoardFields>
      <Menu id={'side-menu'} />
    </>
  )
}

const Fields = ({ boardState }) => {
  return (
    <>
      {GRID.map((row, i) => {
        return GRID.map((column, j) => {
          const piece: Character | null = boardState[row][column]
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
