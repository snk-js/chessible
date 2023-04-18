import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { useEffect } from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import { GameContextProvider } from '@/gameContext/game'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

function App({ Component, pageProps = { title: 'index' } }) {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <GameContextProvider>
        <Dom>
          <Component {...pageProps} />
        </Dom>
      </GameContextProvider>
      {/* {Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>} */}
    </>
  )
}

export default App
