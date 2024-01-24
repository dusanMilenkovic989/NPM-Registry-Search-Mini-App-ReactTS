import { Dispatch } from 'redux'
import { Action, ActionObject, ACTION_TYPE, RepositoryRegistry, NpmRepository, LINKS } from '../../types'

/**
 * Action creator logic connected with searching through NPM registry for packages.
 * @param {string} repositoryName Encoded NPM package name. Encode before passing it as an argument!
 * @returns {Function} Returns Redux thunk function which generates action objects asynchronously. 
 */
const fetchRepositories = (repositoryName: string): Function =>
    /**
     * Redux thunk function.
     * @template Dispatch Describes the arguments that the dispatch function accepts, their type and the type of a return value of the dispatch function.
     * @template Action Describes the structure of an action object, and the possible property types.
     * @param {Dispatch<Action>} dispatch Redux dispatch function.
     * @returns {Promise<void>} Returns an empty promise.
     */
    async (dispatch: Dispatch<Action>): Promise<void> =>
    {
        dispatch<ActionObject<typeof ACTION_TYPE.repositoriesFetch, boolean>>({
            type: ACTION_TYPE.repositoriesFetch,
            payload: true
        })

        try
        {
            const RESPONSE = await fetch(LINKS.npmRegistry(repositoryName))
            
            if (RESPONSE.ok)
            {
                const REPOSITORIES: RepositoryRegistry = await RESPONSE.json()
                dispatch<ActionObject<typeof ACTION_TYPE.repositoriesSuccessful, string[]>>({
                    type: ACTION_TYPE.repositoriesSuccessful,
                    payload: REPOSITORIES.objects.map(
                        ({ package: { name } }: NpmRepository): string => name
                    )
                })
            }
            else
            {
                const RESPONSE_BODY = await RESPONSE.text()

                dispatch<ActionObject<typeof ACTION_TYPE.repositoriesFail, string>>({
                    type: ACTION_TYPE.repositoriesFail,
                    payload: RESPONSE_BODY
                })
            }
        }
        catch (e)
        {
            if (e instanceof Error)
            {
                dispatch<ActionObject<typeof ACTION_TYPE.repositoriesFail, string>>({
                    type: ACTION_TYPE.repositoriesFail,
                    payload: e.message
                })
            }
        }
    }

export { fetchRepositories }