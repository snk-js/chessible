const GRID = [0, 1, 2, 3, 4, 5, 6, 7]
// epic chess
import { PieceType } from '@/types/chess'
import Piece from '@/models/piece'

const { bb, bk, bn, bp, bq, br, wb, wk, wn, wp, wq, wr } = PieceType

export const initialize_board = (): Piece[][] =>
  GRID.map((row) => {
    if (row === 0)
      return [
        new Piece(br),
        new Piece(bn),
        new Piece(bb),
        new Piece(bq),
        new Piece(bk),
        new Piece(bb),
        new Piece(bn),
        new Piece(br),
      ]
    if (row === 1)
      return [
        new Piece(bp),
        new Piece(bp),
        new Piece(bp),
        new Piece(bp),
        new Piece(bp),
        new Piece(bp),
        new Piece(bp),
        new Piece(bp),
      ]
    if (row === 6)
      return [
        new Piece(wp),
        new Piece(wp),
        new Piece(wp),
        new Piece(wp),
        new Piece(wp),
        new Piece(wp),
        new Piece(wp),
        new Piece(wp),
      ]
    if (row === 7)
      return [
        new Piece(wr),
        new Piece(wn),
        new Piece(wb),
        new Piece(wq),
        new Piece(wk),
        new Piece(wb),
        new Piece(wn),
        new Piece(wr),
      ]
    return [null, null, null, null, null, null, null, null]
  })
