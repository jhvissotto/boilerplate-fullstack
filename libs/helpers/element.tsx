import { packs } from '~/src'

export function Create({ tag, children, props }) {
    return packs.react.createElement(tag, props, children)
}

export function Clone({ children, props }) {
    return packs.react.cloneElement(props, children)
}