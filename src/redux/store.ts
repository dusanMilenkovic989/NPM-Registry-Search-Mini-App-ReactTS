import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import { reducer } from './'
import { AppState, Action, CombineReducersPartial } from '../types'

const STORE = createStore<
    AppState, 
    Action, 
    {}, 
    {}, 
    Partial<CombineReducersPartial>
>(reducer, undefined, applyMiddleware(thunk))

export { STORE }