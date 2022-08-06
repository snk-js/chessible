import Piece from '@/models/piece'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type Field = {
  column: number
  row: number
  piece: Piece | null
  id: number
  selected: boolean
  handleSelect: (moves: number[][]) => void
  resetHightlight: () => void
}

const Field = ({
  column,
  row,
  piece,
  id,
  selected,
  handleSelect,
  resetHightlight,
}: Field) => {
  const [pieceState, setPiece] = useState(piece)

  useEffect(() => {
    setPiece(piece)
  }, [piece])

  const handleClick = () => {
    piece ? handleSelect(piece?.moves([row, column])) : resetHightlight()
  }

  return (
    <div
      className={`border border-[#30ffff] ${
        id % 2 !== 0 ? 'bg-[#09ffff2f]' : ''
      } ${selected ? 'bg-black' : ''}`}
      onClick={handleClick}
    >
      {pieceState?.img && (
        <div className=''>
          <Image src={pieceState?.img} alt='' />
        </div>
      )}
    </div>
  )
}

export default Field
