import { Providers, store } from '~/src'
import { Packs } from '~/src/types'

function MyApp({ Component: Page, pageProps }: Packs.Next.AppProps) {
    return (
        <Providers>
            <Page {...pageProps} />
        </Providers>
    )
}

export default store.wrapper.withRedux(MyApp)
