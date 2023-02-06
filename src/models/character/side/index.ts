import Character, { CharactersConstructor } from '..'
import { Characters } from '../class'

function MergeChars(
  chars: CharStore<Characters>,
  char: new () => Characters
): CharStore<Characters> {
  const name = getCharName(char)

  !Object.hasOwn(chars, name) && (chars[name] = [])
  return {
    ...chars,
    [name]: [...chars[name], char],
  }
}

function getCharName<T extends Characters>(c: new () => T): string {
  return c.name
}

type CharStore<T> = {
  [P in keyof T]?: Array<T[P]>
}

export class CharSide {
  static ally?: CharStore<Characters> = {}

  constructor(
    charType: new (side?: Side, charStats?: Character) => InstanceType<
      CharactersConstructor<Side, Character>
    > &
      Side,
    charStats: Character
  ) {
    const sideClass = SideMap.get(this.constructor.name) as typeof Black & White
    sideClass.setAlly(charType)
    return new charType(this, charStats)
  }
}

function setAlly<T extends Characters>(
  sideClass: typeof CharSide,
  charType: new () => T
): void {
  sideClass.ally = MergeChars(sideClass.ally, charType)
}

export class Black extends CharSide {
  static ally?: CharStore<Characters> = {}

  static clean() {
    this.ally = {}
  }

  static setAlly: (charType: new () => Characters) => void = setAlly.bind(
    null,
    Black
  )
}
export class White extends CharSide {
  static ally?: CharStore<Characters> = {}

  static clean() {
    this.ally = {}
  }

  static setAlly: (charType: new () => Characters) => void = setAlly.bind(
    null,
    White
  )
}

const SideMap = new Map<string, Side>([
  ['Black', Black],
  ['White', White],
])

export type Side = Black | White
