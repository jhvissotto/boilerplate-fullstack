import { helpers, routes, utils } from '~/src'

const nextRouter = new helpers.NextRouter()

utils._.forEach(routes.next, ({ pattern, page }) => {
    nextRouter.add(pattern, page)
})

export { nextRouter }