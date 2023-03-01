import { helpers } from '~/src'
import { I } from '~/src/types'


helpers.ioc.injectable()
export class geometric implements I.Geometric {
    mult(a: number, b: number): number {
        return a * b
    }
    div(a: number, b: number): number {
        return a / b
    }
}