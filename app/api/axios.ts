import { packs, env } from '~/src'

export const Axios = packs.axios.create({
    baseURL: env.API_BASEURL,
})