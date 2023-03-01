import { Assets } from '~/src'
import { MyDocument } from '~/view'

export function Provider({ children }) {
    return (
        <MyDocument>
            <Assets.Styles.Global />
            {children}
        </MyDocument>
    )
}
