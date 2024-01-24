import { RepositoriesState, Action, ACTION_TYPE } from '../../types'

/**
 * Reducer function tasked with providing a data structure, value of the state property, and defining ways of how it could be changed, depending on action objects, which could be dispatched from different parts of the application.
 * 
 * Invoked by Redux every time an action object gets dispatched.
 * @template RepositoriesState Describes the *repositories* property data structure on the application state object.
 * @template Action Describes the structure of an action object, and the possible property types.
 * @param {RepositoriesState} [state] A data structure, which represents a value of one of the state's properties.
 * @param {Action} action An action object which is dispatched from different parts of the application.
 * @returns {RepositoriesState} Returns a data structure, which represents a value of one of the state's properties.
 */
const repositoriesReducer = (
    state: RepositoriesState = {
        data: [],
        loading: false,
        error: ''
    }, 
    action: Action
): RepositoriesState =>
{
    switch (action.type)
    {
        case ACTION_TYPE.repositoriesSuccessful:
            const SUCCESS_STATE = { 
                data: action.payload, 
                loading: false, 
                error: '' 
            }

            return SUCCESS_STATE

        case ACTION_TYPE.repositoriesFetch:
            const FETCHING_STATE = { 
                data: [], 
                loading: action.payload, 
                error: ''
            }

            return FETCHING_STATE
        
        case ACTION_TYPE.repositoriesFail:
            const FAIL_STATE = { 
                data: [], 
                loading: false, 
                error: action.payload
            }

            return FAIL_STATE

        default:
            return state
    }
}

export { repositoriesReducer }