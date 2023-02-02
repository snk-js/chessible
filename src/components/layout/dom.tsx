import useStore from '@/helpers/store'
import { useEffect, useRef, useState } from 'react'
import bgimg from '@/assets/backgrounds/forest5.png'
import Image from 'next/image'
import styled from 'styled-components'
import Menu from './Menu'
import { createPortal } from 'react-dom'

const ImageHandler = ({ className }: { className? }) => (
  <Image className={className} src={bgimg} alt='' />
)
const BackgroundContainer = styled(ImageHandler)`
  // transform: translate(0, -20rem);
`

const Background = ({ children }) => {
  return (
    <div style={{ width: '100%' }}>
      <BackgroundContainer />
      {children}
    </div>
  )
}

const Dom = ({ children }) => {
  const [menu, setMenuRef] = useState(null)

  const ref = useRef(null)
  useEffect(() => {
    const menu = document.getElementById('side-menu')
    setMenuRef(menu)
    useStore.setState({ dom: ref })
  }, [])

  return (
    <div
      className='absolute top-0 left-0 z-10 w-screen h-screen overflow-auto'
      ref={ref}
    >
      <Background>
        {children}
        {menu && createPortal(<Menu />, menu)}
      </Background>
    </div>
  )
}

export default Dom
