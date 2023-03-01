import { store, stores, createStore } from '~/src'
import { Packs, Stores } from '~/src/types'

export module Store {
    export type State = {
        counter: Stores.Counter.State
    }
    export type Dispatch = ReturnType<typeof createStore>['dispatch']
    // export type Thunk<ReturnType = void> = Packs.Redux.ThunkAction<ReturnType, Store.State, unknown, Packs.Redux.Action<string>>
}
