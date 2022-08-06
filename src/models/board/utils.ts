import { Vector } from '.'
import { BoardFields } from '@/models/board'

export const swapPiece = (
  origin: Vector,
  destination: Vector,
  boardState: BoardFields
) => {
  const [row, column] = origin
  const [row2, column2] = destination
  const piece = boardState[row][column]
  boardState[row2][column2] = piece.changePosition(destination)
  boardState[row][column] = null
  return boardState
}
