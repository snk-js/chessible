const GRID = [0, 1, 2, 3, 4, 5, 6, 7]

export const initialState = {}

const MAX_LENGTH = 8

import { PieceType } from '@/types/chess'

const { bb, bk, bn, bp, bq, br, wb, wk, wn, wp, wq, wr } = PieceType

export const boardInitialState = () =>
  GRID.map((row) => {
    if (row === 0) return [wr, wn, wb, wq, wk, wb, wn, wr]
    if (row === 1) return [wp, wp, wp, wp, wp, wp, wp, wp]
    if (row === 6) return [bp, bp, bp, bp, bp, bp, bp, bp]
    if (row === 7) return [br, bn, bb, bq, bk, bb, bn, br]
    return [null, null, null, null, null, null, null, null]
  })

export const NORTH_EAST = [1, 1]
export const NORTH_WEST = [-1, 1]
export const SOUTH_EAST = [1, -1]
export const SOUTH_WEST = [-1, -1]
export const NORTH = [0, 1]
export const SOUTH = [0, -1]
export const EAST = [1, 0]
export const WEST = [-1, 0]

export const L = [
  [3, 1],
  [3, -1],
  [1, 3],
  [1, -3],
  [-3, 1],
  [-3, -1],
  [1, -3],
  [-1, -3],
]

export const DIAGONAL = [NORTH_EAST, NORTH_WEST, SOUTH_EAST, SOUTH_WEST]

export const VERTICAL_HORIZONTAL = [NORTH, SOUTH, EAST, WEST]
