import { router, routes, ctrl } from '~/src'


export const expressRoutes = {
    wellcome: {
        endpoint: () => '/wellcome',
    }
}


router.express.get(routes.express.wellcome.endpoint(), ctrl.wellcome)