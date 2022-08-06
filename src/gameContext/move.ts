import * as DIRECTIONS from '../constants'

type Vector = [number, number]
type Coordinates = Array<Vector>

export const getDirectionByPiece = (piece: string) => {
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

export const genPossibleMoves = (piece: string, origin: Vector) => {
  let dir = getDirectionByPiece(piece)
  const scalar_move = ['wb', 'wq', 'wr', 'bb', 'bq', 'br'].includes(piece)

  return genMoves(origin, dir, scalar_move)
}

const genMoves = (origin, directions, expand): Coordinates => {
  const result = []

  expand
    ? directions.map((move) => {
        let [x, y] = origin

        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
          result.push([(x += move[0]), (y += move[1])])
        }
      })
    : directions.map((move) => {
        let [x, y] = origin
        result.push([(x += move[0]), (y += move[1])])
      })
  return result
}
