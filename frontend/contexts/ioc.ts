import { packs, container } from '~/src'


export const name = 'IOC'

export const value = { container }

export const Ctx = packs.react.createContext(value)