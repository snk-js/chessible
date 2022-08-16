import { createContext, useEffect, useContext } from 'react'
import { useState } from 'react'
import Board, { BoardFields } from '@/models/board'
import Piece from '@/models/piece'
import { TurnContext } from './turn'

const GameContext = createContext(null)

type Vector = [number, number]

type HightlighFeat = {
  moves: [number, number][]
  piece: Piece
}

const GameContextProvider = ({ children }) => {
  const { player, spendActionPoint } = useContext(TurnContext)

  const [board] = useState(new Board())
  const [boardState, setBoardState] = useState(board.state)

  const [highlightedFields, setHighlightedFields] = useState<HightlighFeat>({
    moves: [],
    piece: null,
  })

  const isFieldHightLighted = (row, column) => {
    return highlightedFields.moves.some(
      (move) => move[0] === row && move[1] === column
    )
  }

  const handleSelectPiece = (position: [number, number]) => {
    const [row, column] = position
    const piece: Piece = boardState[row][column]

    if (piece.role[0] === player) {
      const moves: [number, number][] = piece.moves(boardState)
      setHighlightedFields({ moves, piece })
    }
  }

  const resetHightlight = () => {
    setHighlightedFields({ moves: [], piece: null })
  }

  const flipBoard = () => {
    setBoardState(board.flip().state)
  }

  const movePieceTo = (origin: Vector, destination: Vector) => {
    setBoardState(board.movePieceTo(origin, destination))
    spendActionPoint()
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
        movePieceTo,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export type GameContextFeatures = {
  boardState: BoardFields
  flipBoard: () => void
  highlightedFields: HightlighFeat
  resetHightlight: () => void
  handleSelectPiece: (position: Vector) => void
  isFieldHightLighted: (row: number, column: number) => boolean
  movePieceTo: (origin: Vector, destination: Vector) => void
}

export { GameContextProvider, GameContext }
