import Image from 'next/image'
import { useEffect, useState } from 'react'

const Field = ({ column, row, piece, id }) => {
  const [pieceState, setPiece] = useState(piece)

  useEffect(() => {
    setPiece(piece)
  }, [piece])

  const handleClick = () => {
    console.log(`${column}${row}`)
  }

  return (
    <div
      className={`border border-[#30ffff] ${
        id % 2 !== 0 ? 'bg-[#09ffff2f]' : ''
      } `}
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
