import { RepositoriesList } from './'

/**
 * React functional component rendering heading and RepositoriesList component template to the DOM.
 * @returns {React.JSX.Element} Returns JSX template.
 */
const App: React.FC = (): React.JSX.Element =>
{
    return (
        <div>
            <h1>Search NPM libraries</h1>
            <RepositoriesList />
        </div>
    )
}

export { App }