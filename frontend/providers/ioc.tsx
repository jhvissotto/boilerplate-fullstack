import { Ctx, value } from '~/src'


export function Provider({ children }) {
    return (
        <Ctx.IOC.Provider value={value.IOC} >
            {children}
        </Ctx.IOC.Provider>
    )
}