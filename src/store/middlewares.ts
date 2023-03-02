import { StateCreator, StoreMutatorIdentifier, } from "zustand"
import { immer } from "zustand/middleware/immer"



type middleware =
  < T
    , Mps extends [StoreMutatorIdentifier, unknown][] = []
    , Mcs extends [StoreMutatorIdentifier, unknown][] = []
  >
    (f: StateCreator<T, [...Mps, ["zustand/immer", never]], Mcs>) =>
    StateCreator<T, Mps, [["zustand/immer", never], ...Mcs]>


export const middleware = (f => immer(f)) as middleware
