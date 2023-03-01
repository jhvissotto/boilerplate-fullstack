import { packs, utils } from '~/src'



export function Router() {

    const nextRouter = packs.next.useRouter()

    const parsed = utils.QS.parseUrl(nextRouter.asPath)

    const router = packs.react.useMemo(() => ({
        ...nextRouter,  
        url:    parsed.url,
        query:  utils._.pick(nextRouter.query, Object.keys(parsed.query)),
        params: utils._.omit(nextRouter.query, Object.keys(parsed.query)),
    }), [nextRouter])

    return { router }
}