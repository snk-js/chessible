import { pieceImages } from './pieceImages'
import { genPossibleMoves } from '@/gameContext/move'

class Piece {
  img: string
  role: string // wb - (white bishop)
  location: [number, number]

  constructor(role: string, location: [number, number]) {
    this.role = role
    this.img = pieceImages[role]
    this.location = location
  }

  exchangeRole() {
    const newRole = this.role.includes('w')
      ? 'b' + this.role[1]
      : 'w' + this.role[1]
    this.role = newRole
    this.img = pieceImages[newRole]
    return this
  }

  move(newLocation: [number, number]) {
    this.location = newLocation
  }

  moves(origin) {
    return genPossibleMoves(this)
  }
}

export default Piece
