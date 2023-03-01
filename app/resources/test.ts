import { Api, resources, libs, routes } from '~/src'
import { Resources } from '~/src/types'


export module Test {
    export type Req = {
        params?: {}
        query?: { aaa: string, bbb: string }
        body?: {}
    }
    export type Res = {
        message: string
    }
}


export const test = {
    endpoint: (req: Resources.Test.Req) => {
        return `/test`
    },
    call: (req: Resources.Test.Req) => {
        const endpoint = resources.test.endpoint(req)
        const call = libs.helpers.resolvers.axios<Resources.Test.Res>(Api.Axios.get(endpoint))
        return call
    }
}