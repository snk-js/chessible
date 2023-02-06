import { Vec2 } from '../board'
import Piece from '../piece'
import { pieceImages, PieceRoles } from '@/models/piece/pieceImages'
import * as classes from './class'
import { StaticImageData } from 'next/image'

export type Clan = 'w' | 'b'
export type Classes = 'k' | 'n' | 'p' | 'r' | 'b' | 'q'

// Character is a Facade model for
// developing the essense behavior
// of the piece given a role.
class Character extends Piece {
  role: PieceRoles // wb - (white bishop)
  clan: Clan
  id: string
  img: StaticImageData
  class: classes.Characters

  constructor(position: Vec2, role: PieceRoles) {
    super(position)
    this.img = pieceImages[role]
    this.clan = (role && role[0]) as Clan
    this.role = role

    const classs = (role && role[1]) as Classes

    switch (classs) {
      case 'n':
        return (this.class = new classes.Knight(this)) && this
      case 'p':
        return (this.class = new classes.Pawn(this)) && this
      case 'r':
        return (this.class = new classes.Rook(this)) && this
      case 'q':
        return (this.class = new classes.Queen(this)) && this
      case 'k':
        return (this.class = new classes.King(this)) && this
      case 'b':
        return (this.class = new classes.Bishop(this)) && this
      default:
        return this
    }
  }

  changeId(id: string) {
    this.id = id
    return this
  }
}

export default Character
