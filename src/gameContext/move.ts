import * as DIRECTIONS from '../constants'
import Piece from '@/models/piece'
import Board from '@/models/board'
type Vec2 = number[]
type Coordinates = Array<Vec2>

export const getDirectionByPiece = (
  piece: string,
  pieceOrigin: Vec2
): Coordinates => {
  if (piece === 'wp') {
    if (pieceOrigin[0] === 6) {
      return [
        [-1, 0],
        [-2, 0],
      ]
    } else {
      return [
        [-1, 0],
        [-1, 1],
        [-1, -1],
      ]
    }
  }

  if (piece === 'bp') {
    if (pieceOrigin[0] === 1) {
      return [
        [1, 0],
        [2, 0],
      ]
    } else {
      return [
        [1, 0],
        [1, 1],
        [1, -1],
      ]
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

const assertMove = (x, y, move) =>
  x + move[0] >= 0 && y + move[1] >= 0 && x + move[0] <= 7 && y + move[1] <= 7

const genMoves = (origin, directions, expand): Coordinates => {
  const result: Coordinates = []

  expand
    ? directions.map((move) => {
        let [x, y] = origin
        while (assertMove(x, y, move)) {
          result.push([(x += move[0]), (y += move[1])])
        }
      })
    : directions.map((move: [number, number]) => {
        let [x, y] = origin
        if (assertMove(x, y, move))
          result.push([(x += move[0]), (y += move[1])])
      })
  return result
}

const pieceColision = (
  moves: Coordinates,
  boardState: Board['state'],
  directions: Coordinates,
  scalar_move: boolean,
  pieceOrigin: Vec2
) => {
  const possibleMoves = []
  const field: (dir: Vec2) => Piece | null = (dir) => {
    return boardState[dir[0]][dir[1]]
  }

  if (!scalar_move) {
    moves.map((move) => {
      !field(move) && possibleMoves.push(move)
    })
  } else {
    directions.map((dir) => {
      let [x, y] = pieceOrigin
      while (assertMove(x, y, dir)) {
        const notAllowedMove = field([(x += dir[0]), (y += dir[1])])
        if (notAllowedMove) {
          break
        } else {
          possibleMoves.push([x, y])
        }
      }
    })
  }
  return possibleMoves
}

export const genPossibleMoves = (piece: Piece, boardState: Board['state']) => {
  const pieceRole: string = piece.role
  const pieceOrigin: Vec2 = piece.position
  const dir = getDirectionByPiece(pieceRole, pieceOrigin)
  const scalar_move = DIRECTIONS.scalars.includes(pieceRole)
  const moves = genMoves(pieceOrigin, dir, scalar_move)

  const possibleMoves = pieceColision(
    moves,
    boardState,
    dir,
    scalar_move,
    pieceOrigin
  )
  return possibleMoves
}
