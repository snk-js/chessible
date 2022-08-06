import { createContext, useEffect } from 'react'
import { useState } from 'react'
import Board, { BoardFields } from '@/models/board'
import Piece from '@/models/piece'

const GameContext = createContext(null)

type HightlighFeat = {
  moves: [number, number][]
  piece: Piece
}

const GameContextProvider = ({ children }) => {
  const [board] = useState(new Board())
  const [boardState, setBoardState] = useState(board.state)
  // const [countTurn, setCountTurn] = useState([{}])

  const [highlightedFields, setHighlightedFields] = useState<HightlighFeat>({
    moves: [],
    piece: null,
  })

  const isFieldHightLighted = (row, column) =>
    highlightedFields.moves.some(
      (move) => move[0] === row && move[1] === column
    )

  const handleSelectPiece = (position: [number, number]) => {
    const [row, column] = position
    const piece: Piece = boardState[row][column]
    const moves: [number, number][] = piece.moves()
    setHighlightedFields({ moves, piece })
  }

  const resetHightlight = () => {
    setHighlightedFields({ moves: [], piece: null })
  }

  const flipBoard = () => {
    setBoardState(board.flip().state)
  }

  return (
    <GameContext.Provider
      value={{
        boardState,
        flipBoard,
        // field
        resetHightlight,
        handleSelectPiece,
        highlightedFields,
        isFieldHightLighted,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export type GameContextFeatures = {
  boardState: BoardFields
  flipBoard: () => void
  resetHightlight: () => void
  handleSelectPiece: (position: [number, number]) => void
  isFieldHightLighted: (row: number, column: number) => boolean
}

export { GameContextProvider, GameContext }
