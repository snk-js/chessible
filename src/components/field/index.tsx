import Piece from '@/models/piece'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { GameContext } from '@/gameContext/game'
import { GameContextFeatures } from '@/gameContext/game'
import styled from 'styled-components'

type Vec2 = [number, number]
type handleSelectArgs = {
  moves: Vec2[]
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
    highlightMove,
    handleSelectPiece,
    resetHightlight,
    highlightedFields,
    movePieceTo,
  }: GameContextFeatures = useContext(GameContext)

  const isHighlighted = highlightMove(row, column)

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
      {pieceImg ? <FieldHandler img={pieceImg} /> : <></>}
    </div>
  )
}

const ButtonField = styled.a`
  background: #0000ff20;
  display: block;
  width: 100%;
  height: 100%;
`

const FieldHandler = ({ img }) => {
  return (
    <ButtonField>
      <Image src={img} alt='' />
    </ButtonField>
  )
}

export default Field
