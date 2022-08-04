import * as DIRECTIONS from '../constants'

type Vector = number[]
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
  let direction = []
  const dir = getDirectionByPiece(piece)
  const extendMoves = ['wb', 'wq', 'wr', 'bb', 'bq', 'br'].includes(piece)

  if (piece.includes('p')) {
    if (piece.includes('w')) {
      if (origin[0] === 6) {
        return [
          [0, 1],
          [0, 2],
        ]
      } else {
        return [0, 1]
      }
    }
    if (piece.includes('b')) {
      if (origin[0] === 1)
        return [
          [0, -1],
          [0, -2],
        ]
    } else return [[0, -1]]
  }

  extendMoves
    ? dir.map((move) => {
        let [x, y] = origin

        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
          direction.push([(x += move[0]), (y += move[1])])
        }
      })
    : dir.map((move) => {
        let [x, y] = origin
        direction.push([(x += move[0]), (y += move[1])])
      })

  return direction.filter((move) => !move.includes(-1) && !move.includes(8))
}
