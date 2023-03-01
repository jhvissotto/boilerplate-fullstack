export module Wellcome {
    export type Req = {
        params?: any
        query?: { aaa?: number, bbb?: number }
        body?: any
    }
    export type Res = {
        message: string
    }
}