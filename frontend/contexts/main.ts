import { packs } from '~/src'


export const name = 'Main'

export const value = {
    wellcome: 'Hello World',
}

export const Ctx = packs.react.createContext(value)