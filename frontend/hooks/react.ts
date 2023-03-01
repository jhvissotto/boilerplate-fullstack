import { packs, helpers } from '~/src'

export { useLocalSlice as Reducer } from 'use-local-slice'

export const Callback = packs.react.useCallback
export const Effect = packs.react.useEffect
export const Memo = packs.react.useMemo
export const State = packs.react.useState
export const Ref = packs.react.useRef
export const Context = packs.react.useContext
export const ImperativeHandle = packs.react.useImperativeHandle

export const ChangeEffect = helpers.ReactExtra.useUpdateEffect
