import { db, sql, libs } from '~/src'
import { Model } from '~/src/types'

export module GetUsers {
    export type Props = { limit: number }
    export type Binds = any
    export type Data = Model.Users[]
}

export const getUsers = {
    query: ({ limit }: GetUsers.Props) => `
        SELECT email, pass
        FROM users
        limit ${limit}
    `,
    call: ([props, binds]: [GetUsers.Props, GetUsers.Binds]) => {
        const query = sql.getUsers.query(props)
        const call = libs.helpers.resolvers.knex<GetUsers.Data>(db.client.raw(query, binds))
        return call
    },
}
