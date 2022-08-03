import { pieceImages } from './pieceImages'

class Piece {
  img: string
  role: string
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
}

export default Piece
