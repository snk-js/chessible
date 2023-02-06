import { BoardFields, Vec2 } from '@/models/board'
import Board from '@/models/board'
import Piece from '@/models/piece'
import { Actions } from './move'

type PieceSelectionInterface = {
  board: Board
  position: Vec2
  player: 'w' | 'b'
  boardState: BoardFields
  setBoard: (board: Board) => void
  setHighlightedFields: (moves: { piece: Piece } & Actions) => void
}

export const selectPieceAndHighlight = (props: PieceSelectionInterface) => {
  const { board, position, player, setBoard, setHighlightedFields } = props
  try {
    const newState = board.pieceSelection(position)
    setBoard(newState)
    if (newState.selectedPiece) {
      const selectedPiece = newState.getSelectedPiece()
      if (selectedPiece.clan === player) {
        const moves: Actions = selectedPiece.moves(newState)
        setHighlightedFields({ ...moves, piece: selectedPiece })
      }
    }
    return true
  } catch (e) {
    return false
  }
}
