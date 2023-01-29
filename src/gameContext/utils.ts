import { Vec2 } from '@/models/board'

export const selectPieceAndHighlight = ({
  board,
  position,
  player,
  boardState,
  setBoard,
  setHighlightedFields,
}) => {
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
