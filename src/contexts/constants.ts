const GRID = [0, 1, 2, 3, 4, 5, 6, 7]

export const initialState = {}

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
