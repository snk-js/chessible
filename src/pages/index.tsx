import dynamic from 'next/dynamic'
import Board from '@/components/board'

const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  return (
    <div className='flex justify-center'>
      <Board />
    </div>
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
