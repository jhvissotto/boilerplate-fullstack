import { MyDocument } from '~/view'
import * as IOC from './ioc'
import * as Main from './main'
import * as Styles from './styles'
import * as Global from './global'

export function Providers({ children }) {
    return (
        <MyDocument>
            <IOC.Provider>
                <Main.Provider>
                    <Global.Provider>
                        <Styles.Provider>{children}</Styles.Provider>
                    </Global.Provider>
                </Main.Provider>
            </IOC.Provider>
        </MyDocument>
    )
}
