import { Vec2 } from '.'
import { BoardFields } from '@/models/board'
import Piece from '@/models/piece'

export const swapPiece = (
  origin: Vec2,
  destination: Vec2,
  boardState: BoardFields
) => {
  const [row, column] = origin
  const [row2, column2] = destination
  const piece = boardState[row][column]
  boardState[row2][column2] = piece.changePosition(destination)
  boardState[row][column] = null
  return boardState
}

export const changePiece = (
  origin: Vec2,
  piece: Piece,
  boardState: BoardFields
) => {
  const [row, column] = origin
  boardState[row][column] = piece
  return boardState
}

export const resetPiecesSelection = (boardState: BoardFields) =>
  boardState.map((row: (Piece | null)[]) => {
    return row.map((piece, column) => {
      return piece && piece.unselect()
    })
  })
