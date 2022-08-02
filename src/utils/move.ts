import * as DIRECTIONS from '../constants'

type Vector = number[]
type Coordinates = Array<Vector>

const getDirectionByPiece = (piece: string) => {
  switch (piece) {
    case 'p':
      return DIRECTIONS.NORTH
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
  const extendMoves = ['b', 'q', 'r'].includes(piece)

  if (piece === 'p') {
    return getDirectionByPiece(piece)
  }

  extendMoves
    ? dir.map((move) => {
        let [x, y] = origin

        if (
          x + move[0] === -1 ||
          y + move[1] === -1 ||
          x + move[0] === 8 ||
          y + move[1] === 8
        ) {
          return
        }

        while (x >= 0 && y >= 0 && x <= 7 && y <= 7) {
          direction.push([(x += move[0]), (y += move[1])])
        }
      })
    : dir.map((move) => {
        let [x, y] = origin
        direction.push([(x += move[0]), (y += move[1])])
      })

  return direction
}
