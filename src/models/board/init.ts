const GRID = [0, 1, 2, 3, 4, 5, 6, 7]
// epic chess
import Piece from '@/models/piece'

const pieceOrder = (revert?) => {
  const pawns = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
  const rest = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  return revert ? [...pawns, ...rest] : [...rest, ...pawns]
}

const fieldHosts = (pieceClan, revert?) =>
  Array(pieceOrder().length)
    .fill(pieceClan)
    .map((clan, i) => (pieceOrder()[i] ? clan + pieceOrder(revert)[i] : null))

const createVoid = Array(32).fill(null)
const hosts = [...fieldHosts('b'), ...createVoid, ...fieldHosts('w', true)]

export const initialize_board = (): Piece[][] => {
  const tmp = hosts
  return GRID.map((i) => {
    return GRID.map((k) => new Piece(tmp.shift(), [i, k]))
  })
}
