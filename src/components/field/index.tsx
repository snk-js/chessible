import Image from 'next/image'
import { pieceImages } from './pieceImages'

const Field = ({ column, row, value, id }) => {
  const img = pieceImages[value]

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
      {pieceImages[value] && (
        <div className=''>
          <Image src={img} alt='' />
        </div>
      )}
    </div>
  )
}

export default Field
