import * as IOC from './ioc'
import * as main from './main'


export const value = {
    [IOC.name]:  IOC.value,
    [main.name]: main.value,
}


export const Ctx = {
    [IOC.name]:  IOC.Ctx,
    [main.name]: main.Ctx,
} 