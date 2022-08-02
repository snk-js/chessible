const GRID = [0, 1, 2, 3, 4, 5, 6, 7]

import { IBoardState } from '@/types/chess'
import { PieceType } from '@/types/chess'

const { bb, bk, bn, bp, bq, br, wb, wk, wn, wp, wq, wr } = PieceType

export const boardInitialState = () =>
  GRID.map((row) => {
    if (row === 0) return [br, bn, bb, bq, bk, bb, bn, br]
    if (row === 1) return [bp, bp, bp, bp, bp, bp, bp, bp]
    if (row === 6) return [wp, wp, wp, wp, wp, wp, wp, wp]
    if (row === 7) return [wr, wn, wb, wq, wk, wb, wn, wr]
    return [null, null, null, null, null, null, null, null]
  })

export const flip = (gameState: IBoardState): any => {
  const newState = []
  gameState.map((row) => {
    newState.push(
      row.map((field) => {
        if (field && field[0] === 'w') return 'b' + field[1]
        if (field && field[0] === 'b') return 'w' + field[1]
      })
    )
  })
  return newState
}
