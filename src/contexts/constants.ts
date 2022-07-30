const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const GRID = [0, 1, 2, 3, 4, 5, 6, 7]

export const initialState = {}

import { PieceType } from '@/types/chess'

GRID.map((column) => {
  GRID.map((row) => {
    const cell = (initialState[COLUMNS[column] + row] = null)
  })
})

initialState['A8'] = PieceType.br
initialState['B8'] = PieceType.bn
initialState['C8'] = PieceType.bb
initialState['D8'] = PieceType.bq
initialState['E8'] = PieceType.bk
initialState['F8'] = PieceType.bb
initialState['G8'] = PieceType.bn
initialState['H8'] = PieceType.br
initialState['A7'] = PieceType.bp
initialState['B7'] = PieceType.bp
initialState['C7'] = PieceType.bp
initialState['D7'] = PieceType.bp
initialState['E7'] = PieceType.bp
initialState['F7'] = PieceType.bp
initialState['G7'] = PieceType.bp
initialState['H7'] = PieceType.bp

initialState['A1'] = PieceType.wr
initialState['B1'] = PieceType.wn
initialState['C1'] = PieceType.wb
initialState['D1'] = PieceType.wq
initialState['E1'] = PieceType.wk
initialState['F1'] = PieceType.wb
initialState['G1'] = PieceType.wn
initialState['H1'] = PieceType.wr
initialState['A2'] = PieceType.wp
initialState['B2'] = PieceType.wp
initialState['C2'] = PieceType.wp
initialState['D2'] = PieceType.wp
initialState['E2'] = PieceType.wp
initialState['F2'] = PieceType.wp
initialState['G2'] = PieceType.wp
initialState['H2'] = PieceType.wp
