import { createContext, useEffect } from 'react'
import Piece from '@/models/piece'
import { useState } from 'react'
import create, { UseBoundStore, StoreApi } from 'zustand'

const TurnContext = createContext(null)

type Player = {
  side: 'w' | 'b'
  points: {
    actionPoints: number
    total: number
  }
}

const player: (side: 'w' | 'b') => Player = (side) => ({
  side: side,
  points: {
    actionPoints: 90,
    total: 90,
  },
})

const player1: UseBoundStore<StoreApi<Player>> = create((set) => player('w'))
const player2: UseBoundStore<StoreApi<Player>> = create((set) => player('b'))

type Vec2 = [number, number]

type HightlighFeat = {
  moves: [number, number][]
  piece: Piece
}

const defaultActionPoints = {
  initial: ['move'],
  futures: ['move/attack/defend', 'move/attack/defend'],
}

const TurnContextProvider = ({ children }) => {
  const [turn, setTurn] = useState(0)
  const [player, setPlayer] = useState('w')
  const [points, setPoints] = useState(90)

  const resetActionPoints = () => {
    setPoints(90)
    setActionPoints(defaultActionPoints)
  }

  useEffect(() => {
    setPlayer(turn % 2 === 0 ? 'w' : 'b')
  }, [turn])

  useEffect(() => {
    if (
      actionPoints.initial.length === 0 &&
      actionPoints.futures.length === 0
    ) {
      changeTurn()
      resetActionPoints()
    }
  }, [actionPoints])

  const spendActionPoint = () => {
    setActionPoints({
      ...actionPoints,
      initial: actionPoints.initial.slice(1),
    })

    if (actionPoints.initial.length === 0) {
      setActionPoints({
        ...actionPoints,
        futures: actionPoints.futures.slice(1),
      })
    }
  }

  const changeTurn = () => {
    setTurn(turn + 1)
  }

  return (
    <TurnContext.Provider
      value={{ actionPoints, changeTurn, spendActionPoint, player }}
    >
      {children}
    </TurnContext.Provider>
  )
}

export type TurnContextFeatures = {
  changeTurn: () => void
}

export { TurnContextProvider, TurnContext }
