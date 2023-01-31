import { BoardFields, Vec2 } from '@/models/board'
import Board from '@/models/board'
import Piece from '@/models/piece'

type PieceSelectionInterface = {
  board: Board
  position: Vec2
  player: 'w' | 'b'
  boardState: BoardFields
  setBoard: (board: Board) => void
  setHighlightedFields: (moves: { moves: Vec2[]; piece: Piece }) => void
}

export const selectPieceAndHighlight = (props: PieceSelectionInterface) => {
  const {
    board,
    position,
    player,
    boardState,
    setBoard,
    setHighlightedFields,
  } = props
  try {
    setBoard(board.pieceSelection(position))
    if (board.selectedPiece) {
      const selectedPiece = board.getSelectedPiece()
      if (selectedPiece.role[0] === player) {
        const moves: Vec2[] = selectedPiece.moves(boardState)
        setHighlightedFields({ moves, piece: selectedPiece })
      }
    }
    return true
  } catch (e) {
    return false
  }
}
