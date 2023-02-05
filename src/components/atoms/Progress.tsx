import React, { useState } from 'react'
import { Progress } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'

type ProgressProps = {
  actionPoints: number
  total: number
}

const Mana: React.FC<ProgressProps> = ({ actionPoints, total }) => {
  const [showPlay, setShowPlay] = useState(false)

  const handleOnMouseOver = () => {
    setShowPlay(true)
  }

  const handleOnMouseOut = () => {
    setShowPlay(false)
  }

  return (
    <Button
      className='flex items-center justify-center'
      size='large'
      type='primary'
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <Progress
        className={'motion-safe:animate-pulse z-50'}
        type='circle'
        percent={(actionPoints / total) * 100}
        format={(p) => {
          return (
            <div className='flex items-center justify-center w-full h-full text-lg font-bold text-teal-200'>
              {showPlay ? (
                <PlayCircleFilled className='absolute z-30 text-4xl top -bottom-4' />
              ) : (
                <p className='absolute z-40 font-medium'>{(p / 100) * total}</p>
              )}
            </div>
          )
        }}
        strokeWidth={10}
        trailColor={'#121363'}
        strokeColor={'#00ff2a'}
        width={30}
      />
    </Button>
  )
}

export default Mana
