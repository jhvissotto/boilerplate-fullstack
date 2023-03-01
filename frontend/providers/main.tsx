import { Ctx, value } from '~/src'


export function Provider({ children }) {
    return (
        <Ctx.Main.Provider value={value.Main} >
            {children}
        </Ctx.Main.Provider>
    )
}