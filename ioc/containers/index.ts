import { helpers, classes, Modules } from '~/src'
import { I } from '~/src/types'


export const containers = {
    classes: new helpers.ioc.ContainerModule(bind => {
        bind<I.Arithmetic>(Modules.classes.arithmetic).to(classes.arithmetic)
        bind<I.Geometric>(Modules.classes.geometric).to(classes.geometric)
    })
}