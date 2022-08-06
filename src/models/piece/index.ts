import { pieceImages } from './pieceImages'
import { genPossibleMoves } from '@/gameContext/move'
import { Vector } from '@/models/board'
class Piece {
  img: string
  role: string // wb - (white bishop)
  position: Vector

  constructor(role: string, position: Vector) {
    this.role = role
    this.img = pieceImages[role]
    this.position = position
  }

  changePosition(position: Vector) {
    this.position = position
    return this
  }

  exchangeRole() {
    const newRole = this.role.includes('w')
      ? 'b' + this.role[1]
      : 'w' + this.role[1]
    this.role = newRole
    this.img = pieceImages[newRole]
    return this
  }

  move(newPosition: Vector) {
    this.position = newPosition
  }

  moves() {
    return genPossibleMoves(this)
  }
}

export default Piece
