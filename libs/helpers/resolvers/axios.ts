import { Packs } from '~/src/types'

export module Axios {
    export type Return<T = any, D = any> = {
        isError: boolean
        data: T
        status: number
        error: null | Omit<Packs.Axios.Error<T, D>, 'response'>
    }
}

export function axios<T = any, D = any>(request: any, fallbackData?: T) {
    return request
        .then((response: Packs.Axios.Response<T, D>) => {
            return {
                isError: false,
                data: response.data,
                status: response.status,
                error: null,
            }
        })
        .catch(({ response, ...error }: Packs.Axios.Error<T, D>) => {
            console.error(error)
            return {
                isError: true,
                data: response.data || fallbackData,
                status: response.status,
                error,
            }
        }) as Promise<Axios.Return<T, D>>
}
