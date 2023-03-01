import { Api, resources, libs } from '~/src'
import { Resources, Model } from '~/src/types'

export module GetUsers {
    export type Req = {
        params?: {}
        query?: {}
        body?: {}
    }
    export type Res = Model.Users[]
}

export const getUsers = {
    endpoint: (req: Resources.Test.Req) => {
        return `/get-users`
    },
    call: (req: Resources.Test.Req) => {
        const endpoint = resources.getUsers.endpoint(req)
        const call = libs.helpers.resolvers.axios<Resources.GetUsers.Res>(Api.Axios.get(endpoint))
        return call
    },
}
