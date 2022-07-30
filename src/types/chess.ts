export const PieceType = {
  bp: 'bp',
  bn: 'bn',
  bb: 'bb',
  br: 'br',
  bq: 'bq',
  bk: 'bk',
  wp: 'wp',
  wn: 'wn',
  wb: 'wb',
  wr: 'wr',
  wq: 'wq',
  wk: 'wk',
  none: null,
}

const gridLen = [0, 1, 2, 3, 4, 5, 6, 7]

type IBoardState<Length, PieceTypes> = {
  [Index in keyof Length]: [keyof PieceTypes] | null
}

export type BoardState = IBoardState<typeof gridLen, typeof PieceType>

export enum PieceColor {
  WHITE,
  BLACK,
}
