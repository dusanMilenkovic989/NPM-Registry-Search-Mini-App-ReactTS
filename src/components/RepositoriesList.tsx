import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useActionCreators, useComponentFocus } from '../hooks'
import { AppState, RepositoriesState, ERROR_MESSAGE } from '../types'

/**
 * React functional component rendering the form for searching the NPM registry for packages and an error message if data fetching has failed, a loading message if search is in progress, an empty list message if no packages were found or a list of packages found.
 * @returns {React.JSX.Element} Returns JSX template.
 */
const RepositoriesList: React.FC = (): React.JSX.Element =>
{
    const [LIBRARY_NAME, setLibraryName] = useState('')
    const INPUT_REF = useRef<HTMLInputElement | null>(null)
    const EMPTY_LIST_REF = useRef<HTMLParagraphElement | null>(null)
    useEffect((): void =>
    {
        if (EMPTY_LIST_REF.current)
        {
            EMPTY_LIST_REF.current.style.display = 'none'
        }
    }, [])
    useComponentFocus(INPUT_REF)
    const { fetchRepositories } = useActionCreators()
    const { data: DATA, loading: LOADING, error: ERROR } = useSelector(({ repositories }: AppState): RepositoriesState => repositories)
    
    /**
     * Controlled input text value change event handler.
     * @param {React.ChangeEvent<HTMLInputElement>} e React component input event.
     * @returns {void} No return value.
     */
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => 
    {
        const TARGET = e.target as HTMLInputElement | null

        if (TARGET)
        {
            setLibraryName(e.target.value)
        }
    }

    /**
     * Form submission event handler.
     * @param {React.FormEvent<HTMLFormElement>} e React component form event.
     * @returns {void} No return value.
     */
    const onFormSubmissionHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        fetchRepositories(encodeURIComponent(LIBRARY_NAME))
        setLibraryName('')
    }

    /**
     * Utility function tasked with rendering data to the component.
     * @returns {React.JSX.Element} Returns an error message if data fetching has failed, a loading message if search is in progress, an empty list message if no packages were found or a list of packages found.
     */
    const generateData = (): React.JSX.Element => {
        if (ERROR)
        {
            console.warn(ERROR)

            return <p>{ERROR_MESSAGE.repositoriesFetchFailed}</p>
        }
        else if (LOADING)
        {
            return <p>Loading...</p>
        }

        const REPOSITORIES_LIST = DATA.map((repository: string) => <li key={repository}>{repository}</li>)

        return !REPOSITORIES_LIST.length ? 
            <p 
                ref={EMPTY_LIST_REF}
                style={{ display: 'block' }}
            >
                {ERROR_MESSAGE.noRepositoriesFound}
            </p> : 
            <ul>{REPOSITORIES_LIST}</ul>
    }

    return (
        <div>
            <form onSubmit={onFormSubmissionHandler}>
                <input
                    value={LIBRARY_NAME}
                    onChange={onChangeHandler}
                    ref={INPUT_REF}
                    placeholder='Library'
                />
                <button>Find</button>
            </form> 
            {generateData()}
        </div>
    )
}

export { RepositoriesList }