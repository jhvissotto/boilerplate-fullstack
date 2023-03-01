import { Ctx, use } from '~/src'


export const IOC  = () => use.React.Context(Ctx.IOC)
export const Main = () => use.React.Context(Ctx.Main)