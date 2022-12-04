import Header from "./components/Header"
import Main from "./components/Main"

/**
 * @file App.js
 * @author 0xChristopher
 * @brief This file builds and returns the App component to be rendered.
 */

/**
 * @brief The App() function builds the App component from the sub-components.
 * @returns Returns the App component
 */
function App()
{
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

export default App