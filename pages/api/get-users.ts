import { db, libs } from '~/src'
import { Libs, App } from '~/src/types'

export default async function ApiTest(req: Libs.Packs.Next.Req, res: Libs.Packs.Next.Res) {
    try {
        const router = libs.helpers.parseRouter(req).router as App.Resources.GetUsers.Req

        const {} = router.params
        const {} = router.query
        const {} = router.body

        const { isError, data, error } = await db.sql.getUsers.call([{ limit: 10 }, null])

        if (isError) throw new Error(error)

        const response = data as App.Resources.GetUsers.Res
        console.log('data', data)

        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json(error)
    }
}
