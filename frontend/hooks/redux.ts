import { packs } from '~/src'
import { Store, Packs } from '~/src/types'


export const Selector: Packs.Redux.TypedUseSelectorHook<Store.State> = packs.redux.useSelector

export function Dispatch() {
    const dispatch = packs.redux.useDispatch()
    return { dispatch }
}
