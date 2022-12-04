import trollFace from "../images/trollface.png"

/**
 * @file Header.js
 * @author 0xChristopher
 * @brief This file builds and returns the Header component.
 */

/**
 * @brief The Header() function builds the 'header' section of the webpage.
 * @returns Returns the Header component
 */
function Header() 
{
    return (
        <header className="header">
            <img src={trollFace} alt="trollface" className="header--logo" />
            <h1 className="header--text">Meme Generator</h1>
        </header>
    )
}

export default Header