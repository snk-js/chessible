import { Vec2 } from '../board'
import Piece from '../piece'
import { pieceImages, PieceRoles } from '@/models/piece/pieceImages'
import * as classes from './class'
import { StaticImageData } from 'next/image'
import { DeclaredCharacter } from './class'
export type Clan = 'w' | 'b'
export type Classes = 'k' | 'n' | 'p' | 'r' | 'b' | 'q'
import { Side } from './side'

export type CharactersConstructor<
  S extends Side = Side,
  C extends Character = Character
> = new (side: S, char: C) => classes.Characters

// Character is a Facade model for
// developing the essense behavior
// of the piece given a role.
class Character extends Piece {
  role: PieceRoles // wb - (white bishop)
  clan: Clan
  id: string
  img: StaticImageData
  class: classes.Characters | Side

  constructor(position: Vec2, role: PieceRoles) {
    super(position)
    this.img = pieceImages[role]
    this.clan = (role && role[0]) as Clan
    this.role = role

    const classs = (role && role[1]) as Classes

    switch (classs) {
      case 'n':
        return (this.class = DeclaredCharacter(classes.Knight, this)) && this
      case 'p':
        return (this.class = DeclaredCharacter(classes.Pawn, this)) && this
      case 'r':
        return (this.class = DeclaredCharacter(classes.Rook, this)) && this
      case 'q':
        return (this.class = DeclaredCharacter(classes.Queen, this)) && this
      case 'k':
        return (this.class = DeclaredCharacter(classes.King, this)) && this
      case 'b':
        return (this.class = DeclaredCharacter(classes.Bishop, this)) && this
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
