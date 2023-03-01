import { store, packs } from '~/src'

export function Provider({ children }) {
    const persistor = packs.redux.persistStore(store)

    return (
        <packs.redux.Provider store={store}>
            <packs.redux.PersistGate persistor={persistor}>{children}</packs.redux.PersistGate>
        </packs.redux.Provider>
    )
}
