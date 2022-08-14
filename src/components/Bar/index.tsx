import styled from 'styled-components'

import { useContext } from 'react'

import { TurnContext } from '@/gameContext/turn'

const SideBar = styled.div`
  width: 80vw;
  height: 30px;
  opacity: 0.8;
  @media (min-width: 1280px) {
    width: 40vw;
  }
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Bar = () => {
  const { actionPoints } = useContext(TurnContext)

  const futures = actionPoints.futures
  const initial = actionPoints.initial

  return (
    <SideBar>
      <ActionPointsContainer reversed>
        {initial.map((initial_move, i) => {
          return <ActionPoints key={i} />
        })}
      </ActionPointsContainer>
      <ActionPointsContainer>
        {futures.map((future_execution, i) => {
          return <ActionPoints key={i} />
        })}
      </ActionPointsContainer>
    </SideBar>
  )
}

const ActionPointsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.reversed ? 'row-reverse' : 'row')};
  background: ${(props) => (props.reversed ? 'white' : 'black')};
`
const ActionPoints = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  border-radius: 50%;
  background: red;
  align-self: center;
`

export default Bar
