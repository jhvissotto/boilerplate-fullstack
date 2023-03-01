import { Api, stores } from '~/src'

// ====================================== //
// ================ ROOT ================ //
// ====================================== //
export const Test = Api.Redux.useTestQuery

// ======================================== //
// ================ SLICES ================ //
// ======================================== //
export const FetchCount = stores.counter.api.useFetchCountQuery
