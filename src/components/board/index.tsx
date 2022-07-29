import Piece from '../piece'

import styled from 'styled-components'

const BoardFields = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(8, 64px [grid-start]);
  grid-template-rows: repeat(8, 64px [grid-start]);
`

const Board = () => {
  return (
    <BoardFields>
      {Array(64)
        .fill(1)
        .map((field, i) => {
          return <Piece key={i}></Piece>
        })}
    </BoardFields>
  )
}

export default Board
