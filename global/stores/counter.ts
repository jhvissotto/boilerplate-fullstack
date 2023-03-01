import { packs, Api } from '~/src'
import { Store, Packs } from '~/src/types'


export module Counter {
    export type State = {
        value: number
        status: 'idle' | 'loading' | 'failed'
    }
}


const name = 'counter' 

const initialState: Counter.State = {
  value: 0,
  status: 'idle',
}

const slice = packs.redux.createSlice({
    name,
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action: Packs.Redux.PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => { 
        builder
        .addCase(actions.fetchCount().pending, (state) => {
            state.status = 'loading'
        })
        .addCase(actions.fetchCount().fulfilled, (state, action) => {
            state.status = 'idle'
            state.value += action.payload
        })
    },
})

const selectors = {
    getValue: (state: Store.State) => state.counter.value
}


const api = Api.Redux.injectEndpoints({
    endpoints: (build) => ({
        fetchCount: build.query({
            query: () => '/counter',
        }),
    }),
})


const actions = {
    fetchCount: () => packs.redux.createAsyncThunk(`${name}/${actions.fetchCount.name}`, async (amount: number) => {
        const response = await fetchCount(amount)
        return response.data
    }),
    
    incrementIfOdd: () => (amount: number): Store.Thunk => (dispatch, getState) => {
        const currentValue = selectors.getValue(getState())
        if (currentValue % 2 === 1) {
            dispatch(slice.actions.incrementByAmount(amount))
        }
    }

}

export const counter = { name, slice, selectors, api, actions } 



// export async function fetchCount(amount = 1): Promise<{ data: number }> {
//     const response = await fetch('/api/counter', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ amount }),
//     })
//     const result = await response.json()
//     return result
// }