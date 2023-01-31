import { pieceImages, PieceRoles } from './pieceImages'
import { genPossibleMoves } from '@/gameContext/move'
import { Vec2 } from '@/models/board'
import { StaticImageData } from 'next/image'

class Piece {
  img: StaticImageData
  role: PieceRoles // wb - (white bishop)
  position: Vec2
  selected: boolean

  constructor(role: PieceRoles, position: Vec2) {
    this.role = role
    this.img = pieceImages[role]
    this.position = position
  }

  changePosition(position: Vec2) {
    this.position = position
    return this
  }

  exchangeRole() {
    const newRole: PieceRoles = (
      this.role.includes('w') ? 'b' + this.role[1] : 'w' + this.role[1]
    ) as PieceRoles
    this.role = newRole
    this.img = pieceImages[newRole]
    return this
  }

  move(newPosition: Vec2) {
    this.position = newPosition
  }

  moves(boardState: (Piece | null)[][]) {
    return genPossibleMoves(this, boardState)
  }

  select() {
    this.selected = true
    return this
  }
  unselect() {
    this.selected = false
    return this
  }
}

export default Piece
