import { libs } from '~/src'
import { Libs } from '~/src/types'


export function parseRouter(request: Libs.Packs.Next.Req) {
    
    const { url, query, body } = request

    const parse = libs.utils.QS.parseUrl(url || '')
    
    const router = {
        params: libs.utils._.omit(query, Object.keys(parse.query)),
        query:  libs.utils._.pick(query, Object.keys(parse.query)),
        body
    }
    
    return { router }
}