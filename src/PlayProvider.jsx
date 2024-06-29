import React, { createContext, useState, useContext } from 'react';
import { randomWord } from './Comp/Words';

// Create a context
const PlayContext = createContext();

// Create a provider component
export const PlayProvider = ({ children }) => {
    const [play, setPlay] = useState(false);
    const [group, setGroup] = useState('hardware')
    const [answer, setAnswer] = useState(randomWord())
    console.log(answer)



    return (
        <PlayContext.Provider value={{ play, setPlay ,group,setGroup,answer,setAnswer}}>
            {children}
        </PlayContext.Provider>
    );
};

// Create a custom hook to use the play context
export const usePlay = () => useContext(PlayContext);
