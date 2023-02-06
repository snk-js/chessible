import Piece from '@/models/piece'
import Character from '../character'
import { Characters } from '../character/class'
import { Black, White } from '../character/side'
import { initialize_board } from './init'
import { swapPiece, changePiece, resetPiecesSelection, getPiece } from './utils'

export type BoardFields = (Character | null)[][]
export type Vec2 = [number, number]

class Board {
  state: BoardFields
  selectedPiece: Vec2 | null

  constructor() {
    this.state = initialize_board()
    this.selectedPiece = null
    Black.clean()
    White.clean()
  }

  movePieceTo(origin: Vec2, destination: Vec2) {
    this.state = swapPiece(origin, destination, this.state)
    return this.state
  }

  changeOnePiece(origin, piece: Character) {
    this.state = changePiece(origin, piece, this.state)
    return this
  }

  pieceSelection(origin?: Vec2) {
    this.getPiece(origin)

    // if has origin add it to board selected piece
    // if origin is the same has selected piece, unselected it
    // if has origin selected piece is not the same, update the board
    this.resetPiecesSelection()

    return (
      (this.selectedPiece &&
        this.getPiece(origin).position.toString() ===
          this.selectedPiece.toString() &&
        this.changeOnePiece(origin, this.getSelectedPiece().unselect())) ||
      ((this.selectedPiece = origin) && !origin && this) ||
      (origin && this.changeOnePiece(origin, this.getSelectedPiece().select()))
    )
  }

  getPiece(origin: Vec2) {
    return origin && getPiece(origin, this.state)
  }

  resetPiecesSelection() {
    this.state = resetPiecesSelection(this.state)
  }

  getSelectedPiece() {
    return this.getPiece(this.selectedPiece)
  }

  // flip() {
  //   const newState = []
  //   this.state.map((row: Piece[]) => {
  //     newState.push(
  //       row.map((piece: Piece) => {
  //         return piece?.replaceSides()
  //       })
  //     )
  //   })
  //   this.state = newState
  //   return this
  // }
}

export default Board
