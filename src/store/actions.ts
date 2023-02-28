import { create } from 'zustand'
import { Vec2 } from '@/models/board'
import { middlewares } from './middlewares'

const chessCoordinates = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
]

const rpgChessActions = [
  'm',
  'a',
  'd',
  'mx',
  'ax'
] as const

type Actions = {
  actor: Vec2,
  action: keyof typeof rpgChessActions,
  target: Vec2
}

export interface Action {
  sequence: Array<Actions>,
  back: () => void,
  spend: (actor: Vec2, action: keyof typeof rpgChessActions, target: Vec2) => void,
  reset: () => void
}

export const useActions = create(middlewares<Action>((set) => ({
  sequence: [],
  spend: (actor: Vec2, action: keyof typeof rpgChessActions, target: Vec2) => set(
    (state: Action) => {
      state.sequence.push({ actor, action, target })
    }
  ),

  back: () => set(
    (state: Action) => {
      state.sequence.pop()
    }
  ),

  reset: () => set(
    (state: Action) => {
      state.sequence = []
    }
  )
})))


export interface Action {
  sequence: Array<Actions>,
  back: () => void,
  spend: (actor: Vec2, action: keyof typeof rpgChessActions, target: Vec2) => void,
  reset: () => void
}

export const playOne = ({ actor, action, target }: Actions) => {
  const actions = useActions.getState()
  actions.spend(actor, action, target)
}

export const playBack = () => {
  const actions = useActions.getState()
  actions.back()
}

export const playReset = () => {
  const actions = useActions.getState()
  actions.reset()
}


