import Character from '..'

class Knight {
  static instances: Knight[] = []
  constructor(character: Character) {
    Knight.instances.push(this)
    character?.changeId(
      character.clan +
        '-' +
        this.constructor.name +
        '' +
        Knight.instances.length
    )
    return this
  }
}

class Bishop {
  static instances: Bishop[] = []
  constructor(character: Character) {
    Bishop.instances.push(this)
    character?.changeId(
      character.clan +
        '-' +
        this.constructor.name +
        '' +
        Bishop.instances.length
    )
    return this
  }
}

class Queen {
  static instances: Queen[] = []
  constructor(character: Character) {
    Queen.instances.push(this)
    character?.changeId(
      character.clan + '-' + this.constructor.name + '' + Queen.instances.length
    )
    return this
  }
}

class Pawn {
  static instances: Pawn[] = []
  constructor(character: Character) {
    Pawn.instances.push(this)
    character?.changeId(
      character.clan + '-' + this.constructor.name + '' + Pawn.instances.length
    )
    return this
  }
}

class Rook {
  static instances: Rook[] = []
  constructor(character: Character) {
    Rook.instances.push(this)
    character?.changeId(
      character.clan + '-' + this.constructor.name + '' + Rook.instances.length
    )
    return this
  }
}

class King {
  constructor(character: Character) {
    character.changeId(character.clan + '-' + this.constructor.name)
    return this
  }
}

export { Knight, Bishop, Queen, Pawn, Rook, King }

export type Characters = Knight | Bishop | Queen | Pawn | Rook | King
