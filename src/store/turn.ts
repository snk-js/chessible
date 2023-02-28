import { create } from "zustand"
import { middlewares } from "./middlewares"


type PlayerSide = 'w' | 'b'

export interface turn {
  current: PlayerSide,
  next: () => void,
}

export const useTurn = create(middlewares((set) => ({
  current: 'w',
  next: () => set((state) => {
    state.current = state.current === 'w' ? 'b' : 'w'
  })
})))


