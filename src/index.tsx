import { createRoot } from 'react-dom/client' 
import { Provider } from 'react-redux'
import { STORE } from './redux'
import { App } from './components'

/**
    This application's purpose is to present, on a mini-scale, how TypeScript could be integrated effectively with React and Redux.

    This app is using barrel modules.
    Be aware that barrel modules could cause unwanted effects:
      - Some testing frameworks (Jest) might take longer time to run tests when parsing barrel modules. Barrel modules intentionally obfuscate file location and testing frameworks could have to load every export inside it to find its target
      - Barrel modules could be affecting JS file size significantly in larger-scale projects, which could affect website's user experience
      - Continuous integration stages times could be affected by a large percent
      - Bundlers might encounter issues when TypeScript is combined with barrel modules

    JSDoc has been used throughout the application only to describe different classes, functions and types.
    Its functionality of type checking is disabled inside the TS compiler configuration file.
    When enabling type checking of JSDoc, make sure that the types are correctly described.
*/

const ROOT_EL = document.querySelector('#root')

if (ROOT_EL)
{
    const ROOT = createRoot(ROOT_EL)
    ROOT.render(
        <Provider store={STORE}>
            <App />
        </Provider>
    )
}