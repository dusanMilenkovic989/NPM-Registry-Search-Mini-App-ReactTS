import { ACTION_TYPE } from './enums'
import { fetchRepositories } from '../redux'

/*
    Using one file for exporting the application types over the 'namespace' convention is a matter of personal choice.
*/

/**
 * Describes the structure of the application state object.
 */
export interface AppState
{
    repositories: RepositoriesState
}

/**
 * Describes the structure of the partial coming from the Redux *combineReducers* function custom setup.
 */
export interface CombineReducersPartial
{
    repositories: never
}

/**
 * Describes the *repositories* property data structure on the application state object.
 */
export interface RepositoriesState
{
    data: string[]
    loading: boolean
    error: string
}

/**
 * Describes the structure of the response data coming from the NPM registry.
 */
export interface RepositoryRegistry
{ 
    objects: NpmRepository[] 
}

/**
 * Describes the structure of the specific NPM package data from NPM registry.
 */
export interface NpmRepository
{
    package: {
        name: string
    }
}

/**
 * Describes the structure of an action object.
 * @template T Not hardcoded, becuase the *Action* type needs to be able to set specific string value to *ActionObject*, in order to be properly assigned as a type inside the reducer function. This will enable reducer function to fully understand how to connect certain action object payload values types to action object types values. 
 */
export interface ActionObject<T extends string, P extends string[] | boolean | string>
{
    type: T,
    payload: P
}

/**
 * Describes all the possible versions of the *ActionObject* type.
 * @template ActionObject Describes the structure of an action object. Its type will be inherited from the first generic argument, and payload from the second.
 */
export type Action = 
    ActionObject<typeof ACTION_TYPE.repositoriesSuccessful, string[]> |
    ActionObject<typeof ACTION_TYPE.repositoriesFetch, boolean> |
    ActionObject<typeof ACTION_TYPE.repositoriesFail, string>

/**
 * Describes the structure of the object holding values of all the application action creators.
 */
export interface ActionCreators
{
    fetchRepositories: typeof fetchRepositories
}