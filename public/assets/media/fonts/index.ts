import { Font } from './types'

export const fonts = {
    Roboto: {
        regular: {
            400: {
                css: () => 'Roboto Regular 400',
                family: () => 'Roboto',
                style: () => 'Regular',
                weight: () => 400,
                url: () => null,
            } as Font,
        },
        italic: {
            400: {
                css: () => 'Roboto Italic 400',
                family: () => 'Roboto',
                style: () => 'Italic',
                weight: () => 400,
                url: () => null,
            } as Font,
        },
    },
}
