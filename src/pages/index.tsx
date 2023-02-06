import dynamic from 'next/dynamic'
import Board from '@/components/board'
import Dashboard from '@/components/dashboard'
import styled from 'styled-components'

// import bgAsset from '@/assets/background/nightly.jpg'

// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

const Wallpaper = styled.div`
  display: block;
  z-index: -10;
  height: 100vh;
`

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

// const Background = ({ children }) => {
//   return (
//     <>
//       <Wallpaper>
//         <Image src={bgAsset} alt='' layout='responsive' />
//       </Wallpaper>
//       {children}
//     </>
//   )
// }

// dom components goes here
const Page = (props) => {
  return (
    <Main>
      <Dashboard>
        <Board />
      </Dashboard>
    </Main>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
// Page.r3f = (props) => (
//   <>
//     <Shader />
//   </>
// )

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
