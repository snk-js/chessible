import { genPossibleMoves } from '@/gameContext/move'
import Board, { Vec2 } from '@/models/board'
import Character from '../character'

class Piece {
  position: Vec2
  selected?: boolean

  constructor(position: Vec2) {
    this.position = position
  }

  changePosition(position: Vec2) {
    this.position = position
    return this
  }

  move(newPosition: Vec2) {
    this.position = newPosition
  }

  moves(board: Board) {
    return genPossibleMoves(this.position, board)
  }

  select() {
    this.selected = true
    return this
  }
  unselect() {
    this.selected = false
    return this
  }
}

export default Piece
