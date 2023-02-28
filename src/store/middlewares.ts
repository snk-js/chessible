import { StateCreator, StoreMutatorIdentifier, } from "zustand"
import { devtools, persist, subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"


type MyMiddlewares =
  < T
    , Mps extends [StoreMutatorIdentifier, unknown][] = []
    , Mcs extends [StoreMutatorIdentifier, unknown][] = []
  >
    (f: StateCreator<T, [...Mps, ["zustand/immer", never], ["zustand/subscribeWithSelector", never], ["zustand/devtools", never], ["zustand/persist", unknown]], Mcs>) =>
    StateCreator<T, Mps, [["zustand/immer", never], ["zustand/subscribeWithSelector", never], ["zustand/devtools", never], ["zustand/persist", T], ...Mcs]>

type MyMiddlewaresNoPersist =
  < T
    , Mps extends [StoreMutatorIdentifier, unknown][] = []
    , Mcs extends [StoreMutatorIdentifier, unknown][] = []
  >
    (f: StateCreator<T, [...Mps, ["zustand/immer", never], ["zustand/subscribeWithSelector", never], ["zustand/devtools", never]], Mcs>) =>
    StateCreator<T, Mps, [["zustand/immer", never], ["zustand/subscribeWithSelector", never], ["zustand/devtools", never], ...Mcs]>


export const middlewares = (f => immer(subscribeWithSelector(devtools(persist(f, { name: 'inGameStatus' }))))) as MyMiddlewares
export const middlewaresNoPersist = (f => immer(subscribeWithSelector(devtools(f)))) as MyMiddlewaresNoPersist
