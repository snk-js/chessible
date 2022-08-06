import * as DIRECTIONS from '../constants'
import Piece from '@/models/piece'
type Vector = [number, number]
type Coordinates = Array<Vector>

export const getDirectionByPiece = (piece: string, pieceOrigin: Vector) => {
  if (piece === 'wp') {
    if (pieceOrigin[0] === 6) {
      return [
        [-1, 0],
        [-2, 0],
      ]
    } else {
      return [[-1, 0]]
    }
  }

  if (piece === 'bp') {
    if (pieceOrigin[0] === 1) {
      return [
        [1, 0],
        [2, 0],
      ]
    } else {
      return [[1, 0]]
    }
  } else {
    switch (piece[1]) {
      case 'b':
        return DIRECTIONS.DIAGONAL
      case 'n':
        return DIRECTIONS.L
      case 'q':
        return [...DIRECTIONS.DIAGONAL, ...DIRECTIONS.VERTICAL_HORIZONTAL]
      case 'r':
        return DIRECTIONS.VERTICAL_HORIZONTAL
      case 'k':
        return [...DIRECTIONS.DIAGONAL, ...DIRECTIONS.VERTICAL_HORIZONTAL]
    }
  }
}

const genMoves = (origin, directions, expand): Coordinates => {
  const result: Coordinates = []

  expand
    ? directions.map((move) => {
        let [x, y] = origin
        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
          result.push([(x += move[0]), (y += move[1])])
        }
      })
    : directions.map((move: [number, number]) => {
        let [x, y] = origin
        result.push([(x += move[0]), (y += move[1])])
      })
  return result.filter(
    (move) =>
      !(move[0] < 0) && !(move[0] > 8) && !(move[1] < 0) && !(move[1] > 8)
  )
}

export const genPossibleMoves = (piece: Piece) => {
  const pieceRole = piece.role
  const pieceOrigin = piece.location
  const dir = getDirectionByPiece(pieceRole, pieceOrigin)
  const scalar_move = ['wb', 'wq', 'wr', 'bb', 'bq', 'br'].includes(pieceRole)
  console.log({ dir })
  return genMoves(pieceOrigin, dir, scalar_move)
}
