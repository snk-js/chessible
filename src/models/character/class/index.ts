import Character from '..'
import { Black, CharSide, Side, White } from '../side'

import { CharactersConstructor } from '..'

export class CharacterClass {
  side: CharSide
  constructor(character: Character, side: CharSide) {
    this.side = side

    const sameClassCount = (side.constructor as typeof CharSide).ally[
      this.constructor.name
    ].length

    character?.changeId(
      character.clan + '-' + this.constructor.name + '-' + sameClassCount
      // '-' +
      // this.constructor.instances.length
    )
  }
}

class Knight extends CharacterClass {
  constructor(side: CharSide, char: Character) {
    super(char, side)
    return this
  }
}

class Bishop extends CharacterClass {
  constructor(side: CharSide, char: Character) {
    super(char, side)
    this.side = side
    return this
  }
}

class Queen extends CharacterClass {
  constructor(side: CharSide, char: Character) {
    super(char, side)
    return this
  }
}

class Pawn extends CharacterClass {
  constructor(side: CharSide, char: Character) {
    super(char, side)
    return this
  }
}

class Rook extends CharacterClass {
  constructor(side: CharSide, char: Character) {
    super(char, side)
    return this
  }
}

class King extends CharacterClass {
  constructor(side: CharSide, char: Character) {
    super(char, side)
    return this
  }
}

export { Knight, Bishop, Queen, Pawn, Rook, King }

export type Characters = Knight | Bishop | Queen | Pawn | Rook | King

export function DeclaredCharacter(
  charType: CharactersConstructor<Side, Character>,
  charStats: Character
): CharSide {
  if (charStats.clan === 'b') {
    return new Black(charType, charStats)
  }

  if (charStats.clan === 'w') {
    return new White(charType, charStats)
  }
}
