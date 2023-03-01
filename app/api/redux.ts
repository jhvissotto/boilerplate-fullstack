import { packs, env } from '~/src'

export const Redux = packs.redux.createApi({
    reducerPath: 'ApiRedux',
    baseQuery: packs.redux.fetchBaseQuery({ baseUrl: env.API_BASEURL }),
    endpoints: (builder) => ({
        test: builder.query({
            query: () => `/test`,
        }),
    }),
    extractRehydrationInfo(action) {
        if (action.type === packs.redux.HYDRATE) {
            return action.payload.api
        }
    },
})
