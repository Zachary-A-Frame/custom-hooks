import { useState } from 'react'

const useFlip = () => {
    const [flip, setFlip] = useState(true);
    const toggleFlip = () => {
        // This is a callback, so we can call this anything, we'll just call it flip.
        setFlip(flip => !flip)
    }
    // We need to return something, so just like with useState we'll return an array to be destructured.
    return [flip, toggleFlip]
}

export default useFlip