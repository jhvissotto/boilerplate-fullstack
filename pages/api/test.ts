import { libs } from '~/src'
import { Libs, App } from '~/src/types'


export default function ApiTest (
    req: Libs.Packs.Next.ApiRequest, 
    res: Libs.Packs.Next.ApiResponse, 
) {
    try {

        const router = libs.helpers.parseRouter(req).router as App.Resources.Test.Req

        const {} = router.params
        const {} = router.query
        const {} = router.body
    
        
        const response = { 
            message: 'Hello World' 
        } as App.Resources.Test.Res 

    
        return res.status(200).json(response) 
    } catch (error) {
        return res.status(400).json(error) 
    }
}