import { resources, use, Modules, routes, helpers, utils, Assets } from '~/src'
import { I } from '~/src/types'
import { MyApp, Button, Link, T, Cond } from '~/view'

import { useQuery } from 'react-query'

export default function PageIndex() {
    // const { lang, t } = use.Translator()
    // const { dispatch } = use.Redux.Dispatch()

    // const { router } = use.Next.Router()
    // const {} = router.params
    // const {} = router.query

    // const d = use.Debounce()
    // const t = use.Throttle()

    // const { wellcome } = use.Context.Main()
    // const queries = {
    //     test:   use.Query.Test(),
    //     count:  use.Query.FetchCount(),
    // }

    // const { sub, sum } = use.Container<I.Arithmetic>(Modules.classes.arithmetic)

    // const [state, actions] = use.React.Reducer({
    //     initialState: {
    //         message: '__VOID__'
    //     },
    //     reducers: {
    //         setMessage: (stt, action: ({ payload: string })) => {
    //             return ({ ...stt, message: action.payload })
    //         }
    //     }
    // })

    const handlers = {
        onClick: async () => {
            const { isError, data, error } = await resources.getUsers.call({})

            if (isError) {
                alert(error)
            } else {
                // actions.setMessage(data.message)
                console.log('data', data)
            }
        },
    }

    return (
        <MyApp>
            <T as="h1">Hello World</T>
            {/* <h2>{state.message}</h2> */}
            <Button.Accept onClick={handlers.onClick} />
            <Button.Cancel />

            <nav className={helpers.cn({})}>
                <Link href={routes.next.index.pattern}>GO TO HOME PAGE</Link>
            </nav>
        </MyApp>
    )
}
