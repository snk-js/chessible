import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'
import bgimg from '@/assets/nightly.jpg'
import Image from 'next/image'

const Background = ({ children }) => {
  return (
    <div style={{ width: '100%' }}>
      <Image
        src={bgimg}
        style={{
          zIndex: -10,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        alt=''
      />
      {children}
    </div>
  )
}

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden'
      ref={ref}
    >
      <Background>{children}</Background>
    </div>
  )
}

export default Dom
