import { use } from '~/src'
import { Helpers } from '~/src/types'


export const Container = <T>(
  identifier: Helpers.IOC.interfaces.ServiceIdentifier<T>
): T => {
  const { container } = use.Context.IOC()

  if (!container) {
    throw new Error('The container should not be null')
  }

  try {
    return use.React.Memo(() => container.get<T>(identifier), [container, identifier])
  } catch (error: unknown) {
    return container.resolve<T>(identifier as Helpers.IOC.interfaces.Newable<T>)
  }
}
