import { createContext, useEffect } from 'react'
import { useState } from 'react'

import Board from '@/models/board'

const thisBoard = new Board()
const GameContext = createContext(null)

const GameContextProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(thisBoard.state)

  const flipBoard = () => {
    thisBoard.flip()
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
