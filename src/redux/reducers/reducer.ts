import { combineReducers } from 'redux'
import { repositoriesReducer } from './repositoriesReducer'

/**
 * Final Redux reducer function representing the state on Redux. 
 * 
 * Will be used in the process of setting up Redux store.
 */
const reducer = combineReducers({ repositories: repositoriesReducer })

export { reducer }