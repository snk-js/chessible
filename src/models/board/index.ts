import Piece from '@/models/piece'
import { initialize_board } from './init'

export type BoardFields = (Piece | null)[][]

class Board {
  state: BoardFields

  constructor() {
    this.state = initialize_board()
  }

  flip() {
    const newState = []
    this.state.map((row: Piece[]) => {
      newState.push(
        row.map((piece: Piece) => {
          return piece?.exchangeRole()
        })
      )
    })
    this.state = newState
    return this
  }
}

export default Board
