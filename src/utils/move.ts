import * as DIRECTIONS from '@/constants'

type Vector = number[]
type Coordinates = Array<Vector>

const genPossibleMoves = (
  allowed_directions: Vector | Coordinates,
  extend: boolean
) => {}

const allowedMove = ({ piece }) => {
  switch (piece) {
    case 'p':
      return genPossibleMoves(DIRECTIONS.NORTH, false)
    case 'b':
      return genPossibleMoves(DIRECTIONS.DIAGONAL, true)
    case 'n':
      return genPossibleMoves(DIRECTIONS.L, false)
    case 'q':
      return genPossibleMoves(
        [...DIRECTIONS.DIAGONAL, ...DIRECTIONS.VERTICAL_HORIZONTAL],
        true
      )
    case 'r':
      return genPossibleMoves(DIRECTIONS.VERTICAL_HORIZONTAL, true)
    case 'k':
      return genPossibleMoves(
        [...DIRECTIONS.DIAGONAL, ...DIRECTIONS.VERTICAL_HORIZONTAL],
        false
      )
    default:
      return []
  }
}

const LegalMoves = {
  // b[1]: move: [x,y,n], b[2]: action: [x,y,n]
  b: [],
  r: [],
  p: [],
  n: [],
  k: [],
  q: [],
}
