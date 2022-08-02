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

export type IBoardState = string[][]

export enum PieceColor {
  WHITE,
  BLACK,
}
