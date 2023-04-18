const GRID = [0, 1, 2, 3, 4, 5, 6, 7]
// epic chess
import Character from '@/models/character'
import { PieceRoles } from '../piece/pieceImages'
import { CharSide } from '../character/side'
import { PlayerSide, turn } from '@/store/turn'

const pieceOrder = (revert?: boolean) => {
  const pawns = ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
  const rest = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']
  return revert ? [...pawns, ...rest] : [...rest, ...pawns]
}

const fieldHosts = (pieceClan: PlayerSide, revert?: boolean) =>
  Array(pieceOrder().length)
    .fill(pieceClan)
    .map((clan, i) => (pieceOrder()[i] ? clan + pieceOrder(revert)[i] : null))

const createVoid = Array(32).fill(null)
const hosts = [...fieldHosts('b'), ...createVoid, ...fieldHosts('w', true)]

export const initialize_board = (): (Character | null)[][] => {
  const tmp = hosts
  return GRID.map((i) => {
    return GRID.map((k) => {
      const role: PieceRoles = tmp.shift()
      const char = new Character([i, k], role)
      return role ? char : null
    })
  })
}
