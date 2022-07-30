import Image from 'next/image'
import { pieceImages } from './pieceImages'

const Field = ({ column, row, value }) => {
  return (
    <div className='border border-black'>
      {pieceImages[value] && <Image src={pieceImages[value]} alt='' />}
    </div>
  )
}

export default Field
