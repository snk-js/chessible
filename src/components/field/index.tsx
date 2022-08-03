import Image from 'next/image'
import { pieceImages } from '../../models/piece/pieceImages'

const Field = ({ column, row, piece, id }) => {
  const img = piece?.img

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
      {img && (
        <div className=''>
          <Image src={img} alt='' />
        </div>
      )}
    </div>
  )
}

export default Field
