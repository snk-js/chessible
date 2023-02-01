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
        const moves: Actions = selectedPiece.moves(boardState)
        console.log({ moves })
        setHighlightedFields({ ...moves, piece: selectedPiece })
      }
    }
    return true
  } catch (e) {
    return false
  }
}
