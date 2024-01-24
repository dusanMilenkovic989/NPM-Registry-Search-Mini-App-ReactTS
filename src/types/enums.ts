/**
 * Action objects types.
 */
const ACTION_TYPE = {
    repositoriesFetch: 'REPOSITORIES_FETCH',
    repositoriesSuccessful: 'REPOSITORIES_SUCCESSFUL',
    repositoriesFail: 'REPOSITORIES_FAIL'
} as const

/**
 * Error/warning messages.
 */
const ERROR_MESSAGE = {
    repositoriesFetchFailed: 'NPM repositories could not be fetched at this time!',
    noRepositoriesFound: 'No NPM libraries were found!'
} as const

/**
 * Links used across the application.
 */
const LINKS = {
    npmRegistry: (repositoryName: string): string => 
        `https://registry.npmjs.com/-/v1/search?text=${repositoryName}&size=20`
} as const 

export { ACTION_TYPE, ERROR_MESSAGE, LINKS }