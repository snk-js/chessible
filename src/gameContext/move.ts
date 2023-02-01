import * as DIRECTIONS from '../constants'
import Piece from '@/models/piece'
import Board, { Vec2 } from '@/models/board'
import { CollectionsBookmarkOutlined } from '@material-ui/icons'

type Coordinates = Vec2[]
export type Actions = {
  moves: (Vec2 | null)[]
  defenses: (Vec2 | null)[]
  attacks: (Vec2 | null)[]
}

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
        // attack
        // [-1, 1],
        // [-1, -1],
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
        // attack
        // [1, 1],
        // [1, -1],
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

const field = (dir: Vec2, boardState: Board['state']): Piece | null => {
  return boardState[dir[0]][dir[1]]
}

const assertMove = (x, y, move) =>
  x + move[0] >= 0 && y + move[1] >= 0 && x + move[0] <= 7 && y + move[1] <= 7

const getMovesFiltered = (
  origin: Vec2,
  expand: boolean,
  dirs: Vec2[],
  result = []
): Coordinates => {
  dirs.map((move: Vec2) => {
    let [x, y] = origin
    while (assertMove(x, y, move)) {
      result.push([(x += move[0]), (y += move[1])])
      if (!expand) {
        break
      }
    }
  })
  return result
}

const genMoves = (origin, directions, expand): Coordinates =>
  getMovesFiltered(origin, expand, directions)

const applyAllyFilter = (
  moves: Coordinates,
  boardState: Board['state'],
  pieceOrigin: Vec2
) => {
  const current = (dir: Vec2) => field(dir, boardState)
  const origin = current(pieceOrigin)
  return moves.filter((position: Vec2) => {
    const [x, y] = position
    return boardState[x][y]?.role[0] === origin?.role[0]
  })
}

const pieceColision = (
  moves: Coordinates,
  boardState: Board['state'],
  directions: Coordinates,
  scalar_move: boolean,
  pieceOrigin: Vec2
): Vec2[] => {
  const possibleMoves = []

  const fieldCurrentState = (dir: Vec2) => field(dir, boardState)

  if (!scalar_move) {
    moves.map((move) => {
      !field(move, boardState) && possibleMoves.push(move)
    })
  } else {
    directions.map((dir) => {
      let [x, y] = pieceOrigin
      while (assertMove(x, y, dir)) {
        const notAllowedMove = fieldCurrentState([(x += dir[0]), (y += dir[1])])
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

export const genPossibleMoves = (
  piece: Piece,
  boardState: Board['state']
): Actions => {
  const pieceRole: string = piece.role
  const pieceOrigin: Vec2 = piece.position
  const dir = getDirectionByPiece(pieceRole, pieceOrigin)
  const scalar_move = DIRECTIONS.scalars.includes(pieceRole)
  const moves = genMoves(pieceOrigin, dir, scalar_move)

  const availablePositions = pieceColision(
    moves,
    boardState,
    dir,
    scalar_move,
    pieceOrigin
  )

  const availableDefenses = applyAllyFilter(moves, boardState, pieceOrigin)

  const actions = {
    moves: availablePositions,
    defenses: availableDefenses,
    attacks: [],
  }

  return actions
}
