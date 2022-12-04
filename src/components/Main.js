import React from "react"

/**
 * @file Main.js
 * @author 0xChristopher
 * @brief This file builds and returns the Main component. This component is responsible for getting and
 *      handling user input, grabbing a random meme from the memeData array, and returning the newly
 *      generated meme to be displayed on the page.
 */

/**
 * @brief The Main() function builds the 'main' section of the webpage.
 * @returns Returns the Main component
 */
function Main() 
{
    const [currentImage, setCurrentImage] = React.useState({})          // Current meme image
    const [memeImages, setMemeImages] = React.useState({})              // Meme images data from API call

    // API call to set 'memeImages' object only on initial render
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemeImages(data))
    }, [])

    /**
     * @brief The getMemeImage() function selects a random meme image from the memeImages array and 
     *      returns it.
     * @return Returns a random meme image
     */
    function getMemeImage()
    {
        const memesArray = memeImages.data.memes                                // Meme images array from 'memeImages' object
        const randomImage = Math.floor(Math.random() * memesArray.length)       // Random index based on meme image array length
        const randomMeme = memesArray[randomImage]                              // Image found at random index

        // Update state for new meme image
        setCurrentImage(meme => ({...randomMeme}))
    }

    return (
        <main>
            <div className="form">

                {/* Form input fields */}
                <section className="form--inputs">
                    <input 
                        type="text" 
                        placeholder="Top Text" 
                        className="form--inputs--top" 
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom Text" 
                        className="form--inputs--bottom" 
                    />
                </section>

                {/* Form submit button */}
                <section className="form--button">
                    <button 
                        className="form--button--meme-button"
                        onClick={getMemeImage}
                    >Get Next Meme Image</button>
                </section>
            </div>

            {/* Generated meme image */}
            <section className="meme">
                {currentImage.url && <img src={currentImage.url} alt="meme" className="meme--custom" />}
            </section>
        </main>
    );
}

export default Main;