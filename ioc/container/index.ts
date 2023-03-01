import 'reflect-metadata'
import { helpers, containers } from '~/src'


const container = new helpers.ioc.Container()

container.load(
  containers.classes,
)


export { container }