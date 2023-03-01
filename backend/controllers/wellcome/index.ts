import { Packs, Ctrl } from '~/src/types'

export const wellcome = (req: Packs.Express.Req & Ctrl.Wellcome.Req, res: Packs.Express.Res) => {
    try {
        // const {} = req.params
        // const {} = req.query
        // const {} = req.body

        const response = {
            message: 'Hello, world!',
        } as Ctrl.Wellcome.Res

        return res.status(200).send(response)
    } catch (error) {
        return res.status(400).send(error)
    }
}
