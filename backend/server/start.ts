import { utils, helpers, packs, router, servers, ctrl } from '~/src'

export function start({ port }) {
    // instance
    servers.next
        .prepare()
        .then(() => {
            // logger
            servers.express.use(helpers.logger('dev'))

            // headers
            // servers.express.use(helpers.helmet())
            // servers.express.use(helpers.helmet.frameguard({ action: 'SAMEORIGIN' }))
            servers.express.use(helpers.cors({ preflightContinue: true }))

            // cookies
            servers.express.use(helpers.cookies())

            // favicon
            servers.express.use(helpers.favicon(utils.path.join(__dirname, '../public/favicon.ico')))

            // public
            servers.express.use(packs.express.static(utils.path.join(__dirname, '../public')))

            // routes
            servers.express.use(ctrl.next)
            servers.express.use('/express', router.express)

            // running
            servers.express.listen(port)
        })
        .catch(console.error)
}
