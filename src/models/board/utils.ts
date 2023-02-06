import { Vec2 } from '.'
import { BoardFields } from '@/models/board'
import { Characters } from '../character/class'
import Character from '../character'

export const getPiece = (
  position: Vec2,
  boardState: BoardFields
): Character | null => {
  return boardState[position[0]][position[1]]
}

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
  piece: Character,
  boardState: BoardFields
) => {
  const [row, column] = origin
  boardState[row][column] = piece
  return boardState
}

export const resetPiecesSelection = (boardState: BoardFields) =>
  boardState.map((row: (Character | null)[]) => {
    return row.map((piece) => {
      return piece && piece.unselect()
    })
  })
