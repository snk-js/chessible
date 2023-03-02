import { create } from "zustand"
import { Action } from "./actions";
import { middleware } from "./middlewares"


type PlayerSide = 'w' | 'b'

export interface turn {
  current: PlayerSide,
  next: (actions: Action[]) => void,

}

export const useTurn = create(middleware<turn>((set) => ({
  current: 'w',
  next: (actions) => set((state) => {
    state.current = state.current === 'w' ? 'b' : 'w';

  })
})))


