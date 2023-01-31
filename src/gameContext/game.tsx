import { createContext, useEffect, useContext } from 'react'
import { useState } from 'react'
import Board, { BoardFields } from '@/models/board'
import Piece from '@/models/piece'
import { TurnContext } from './turn'
import { Vec2 } from '@/models/board'
import { selectPieceAndHighlight } from './utils'

const GameContext = createContext(null)

type HightlighFeat = {
  moves: [number, number][]
  piece: Piece
}

const GameContextProvider = ({ children }) => {
  const { player, spendActionPoint } = useContext(TurnContext)

  const [board, setBoard] = useState(new Board())
  const [boardState, setBoardState] = useState(board.state)

  const [highlightedFields, setHighlightedFields] = useState<HightlighFeat>({
    moves: [],
    piece: null,
  })

  const highlightMove = (row, column) => {
    return highlightedFields?.moves?.some(
      (move) => move[0] === row && move[1] === column
    )
  }

  const handleSelectPiece = (position?: Vec2) => {
    // if selected piece is equal to previously selected one
    // -> reset field highlights
    // reset highlights if there's same selection as before
    // and as same selection plus highlighted fields are on
    return (
      (!(
        position?.toString() === board?.selectedPiece?.toString() &&
        highlightedFields.piece
      ) &&
        selectPieceAndHighlight({
          board,
          position,
          player,
          boardState,
          setBoard,
          setHighlightedFields,
        })) ||
      resetHightlight()
    )
  }

  const resetHightlight = () => {
    setHighlightedFields({ moves: [], piece: null })
  }

  const flipBoard = () => {
    setBoardState(board.flip().state)
  }

  const movePieceTo = (origin: Vec2, destination: Vec2) => {
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
        highlightMove,
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
  handleSelectPiece: (position: Vec2) => void
  highlightMove: (row: number, column: number) => boolean
  movePieceTo: (origin: Vec2, destination: Vec2) => void
}

export { GameContextProvider, GameContext }
