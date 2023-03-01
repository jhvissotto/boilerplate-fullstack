import { helpers } from '~/src'
import { I } from '~/src/types'

helpers.ioc.injectable()
export class arithmetic implements I.Arithmetic {
    sum(a: number, b: number): number {
        return a + b
    }
    sub(a: number, b: number): number {
        return a - b
    }
}
