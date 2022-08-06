import Piece from '@/models/piece'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GameContext } from '@/gameContext/game'
import { GameContextFeatures } from '@/gameContext/game'

type Vector = [number, number]
type handleSelectArgs = {
  moves: Vector[]
  piece: Piece | null
}

type Field = {
  column: number
  row: number
  piece: Piece | null
  id: number
}

const Field = ({ column, row, piece, id }: Field) => {
  const [pieceState, setPiece] = useState(piece)
  const {
    isFieldHightLighted,
    handleSelectPiece,
    resetHightlight,
    highlightedFields,
    movePieceTo,
  }: GameContextFeatures = useContext(GameContext)

  const isHighlighted = isFieldHightLighted(row, column)

  useEffect(() => {
    setPiece(piece)
  }, [piece])

  const handleClick = () => {
    if (isHighlighted && piece) {
      // do something
    }

    if (isHighlighted) {
      movePieceTo(highlightedFields.piece.position, [row, column])
    }

    piece ? handleSelectPiece([row, column]) : resetHightlight()
  }
  const pieceImg = pieceState?.img

  return (
    <div
      className={`border border-[#30ffff] ${
        id % 2 !== 0 ? 'bg-[#09ffff2f]' : ''
      } ${isHighlighted ? 'bg-black' : ''}`}
      onClick={handleClick}
    >
      {pieceImg ? <PieceImage img={pieceImg} /> : <></>}
    </div>
  )
}

const PieceImage = ({ img }) => {
  return (
    <div className=''>
      <Image src={img} alt='' />
    </div>
  )
}

export default Field
