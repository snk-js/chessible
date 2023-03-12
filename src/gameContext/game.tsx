import { createContext } from 'react'
import { useState } from 'react'
import Board, { BoardFields } from '@/models/board'
import Piece from '@/models/piece'
import { Vec2 } from '@/models/board'
import { selectPieceAndHighlight } from './utils'
import { Actions } from './move'
import { useTurn } from '@/store/turn'
import { Side } from '@/models/character/side'
import { useActions } from '@/store/actions'

const GameContext = createContext(null)

type HightlighFeat = {
  piece: Piece
} & Actions

const GameContextProvider = ({ children }) => {
  const [board, setBoard] = useState(new Board())
  const [boardState, setBoardState] = useState(board.state)

  // turn
  const current = useTurn.subscribe((state) => state.current)
  const next = useTurn((state) => state.next)

  // action

  const spend = 


  const [highlightedFields, setHighlightedFields] = useState<HightlighFeat>({
    moves: [],
    defenses: [],
    attacks: [],
    piece: null,
  })

  const highlightMove = (row, column) => {
    return highlightedFields?.moves?.some(
      (move) => move[0] === row && move[1] === column
    )
  }

  const highlightDefenses = (row: number, column: number) => {
    return highlightedFields?.defenses?.some(
      (ally) => ally[0] === row && ally[1] === column
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
          player: current,
          boardState,
          setBoard,
          setHighlightedFields,
          
        })) ||
      resetHightlight()
    )
  }

  const resetHightlight = () => {
    setHighlightedFields({ moves: [], piece: null, defenses: [], attacks: [] })
  }

  // const flipBoard = () => {
  //   setBoardState(board.flip().state)
  // }

  const movePieceTo = (origin: Vec2, destination: Vec2) => {
    setBoardState(board.movePieceTo(origin, destination))
  }

  return (
    <GameContext.Provider
      value={{
        next,
        current,
        boardState,
        // flipBoard,
        // field
        resetHightlight,
        handleSelectPiece,
        highlightedFields,
        highlightMove,
        movePieceTo,
        highlightDefenses,
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
  highlightDefenses: (row: number, column: number) => boolean
  movePieceTo: (origin: Vec2, destination: Vec2) => void

  //turn
  next: () => void
  current: Side

}

export { GameContextProvider, GameContext }
