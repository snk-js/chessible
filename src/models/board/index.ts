import Piece from '@/models/piece'
import { initialize_board } from './init'
import { swapPiece } from './utils'

export type BoardFields = (Piece | null)[][]
export type Vector = [number, number]

class Board {
  state: BoardFields

  constructor() {
    this.state = initialize_board()
  }

  movePieceTo(origin: Vector, destination: Vector) {
    this.state = swapPiece(origin, destination, this.state)
    return this.state
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
