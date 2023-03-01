import { packs, stores, Api } from '~/src'
import type { Store } from '~/src/types'

function prepareStore() {
    const combinedReducer = packs.redux.combineReducers({
        [Api.Redux.reducerPath]: Api.Redux.reducer,
        [stores.counter.name]: stores.counter.slice.reducer,
    })

    function reducer(state, action) {
        if (action.type === packs.redux.HYDRATE) return { ...state, ...action.payload }
        return combinedReducer(state, action)
    }

    return packs.redux.configureStore({
        reducer,
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware().concat([Api.Redux.middleware])
        },
    })
}

function prepareWrapper() {
    return packs.redux.createWrapper(prepareStore)
}

export function createStore() {
    const store = prepareStore()
    const wrapper = prepareWrapper()
    return { ...store, wrapper }
}
