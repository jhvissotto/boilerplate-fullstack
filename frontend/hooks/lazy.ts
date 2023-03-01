import { utils, packs } from '~/src'

export function Debounce(func, wait, deps, options) {
    return packs.react.useCallback(utils._.debounce(func, wait, options), deps)
}

export function Throttle(func, wait, deps, options) {
    return packs.react.useCallback(utils._.throttle(func, wait, options), deps)
}