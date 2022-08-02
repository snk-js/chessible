import { createContext, useEffect } from 'react'
import { useState } from 'react'
import { boardInitialState, flip } from './gameState'

const GameContext = createContext(null)

const GameContextProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(boardInitialState())

  const [turn, setTurn] = useState(false)

  const flipBoard = () => {
    setBoardState(flip(boardState))
  }

  const select = ({ row, column }) => {
    //
  }

  return (
    <GameContext.Provider value={{ boardState, flipBoard }}>
      {children}
    </GameContext.Provider>
  )
}

export { GameContextProvider, GameContext }
