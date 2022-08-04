import { pieceImages } from './pieceImages'
import { genPossibleMoves } from '@/gameContext/move'

class Piece {
  img: string
  role: string
  default_moves: [number, number][] | number[]
  constructor(role: string) {
    this.role = role
    this.img = pieceImages[role]
  }

  exchangeRole() {
    const newRole = this.role.includes('w')
      ? 'b' + this.role[1]
      : 'w' + this.role[1]
    this.role = newRole
    this.img = pieceImages[newRole]
    return this
  }

  moves(origin) {
    return genPossibleMoves(this.role, origin)
  }
}

export default Piece
