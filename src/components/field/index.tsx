import Image from 'next/image'
import { pieceImages } from './pieceImages'

const Field = ({ column, row, value }) => {
  const img = pieceImages[value]

  const handleClick = () => {
    console.log(`${column}${row}`)
  }

  return (
    <div className='border border-black'>
      {pieceImages[value] && <Image src={img} alt='' onClick={handleClick} />}
    </div>
  )
}

export default Field
