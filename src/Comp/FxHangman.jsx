import { useState } from 'react';

import img0 from "./img/img0.png"
import img1 from "./img/img1.png"
import img2 from "./img/img2.png"
import img3 from "./img/img3.png"
import img4 from "./img/img4.png"
import img5 from "./img/img5.png"
import img6 from "./img/img6.png"
import background2 from '../assets/background2.webp'
import { randomWord } from "./Words";
import styled from 'styled-components';
import { usePlay } from '../PlayProvider';

const Hangman=styled.div`
   min-height: 100%;
    width: 100%;
    height: 100vh;
    background: url(${props => props.img}) no-repeat center center fixed;
    background-size: cover;

`

const FxHangman = () => {
    const {maxWrong, images} = FxHangman1
    const [nWrong, setNWrong] = useState(0)
    const [guessed, setGuessed] = useState(new Set())
    // const [answer, setAnswer] = useState(randomWord())
    const { group, setGroup ,setAnswer,answer } = usePlay();


    const reset = () => { 
        setNWrong(0)
        setGuessed(new Set())
        setAnswer(randomWord())
        setGroup('hardware')
    }

    const guessedWord = () => {
        return answer
          .split("")
          .map(ltr => (guessed.has(ltr) ? ltr : "_"));
    }

    const handleGuess = (e) => {
        let ltr = e.target.value
        const updatedSet = new Set([...guessed, ltr])
        setGuessed(updatedSet)
        setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    }

    const generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz+".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={guessed.has(ltr)}>
                {ltr}
            </button>
        ))
    }

    const handleChange = (e) => { 
        const {value} = e.target;
        setGroup(value)
        setAnswer(randomWord(value))
        setNWrong(0)
        setGuessed(new Set())
    }


    let alt = `${nWrong}/${maxWrong} guesses`;
    let isWinner = guessedWord().join("") === answer;
    let gameOver = nWrong >= maxWrong
    let gameState = generateButtons();
    if(isWinner) gameState = "You Won!";
    if(gameOver) gameState = "You Lost!";


  return (
    <Hangman className="Hangman" img={background2}>
        <h1 className="Hangman-title">Hangman {group}</h1>
        <div className="Hangman-flex">
            <div className="Hangman-counter">
                <img src={images[nWrong]} alt={alt} />
                <p>Guessed Wrong: {nWrong}</p>
            </div>
            <div>
                <p className="Hangman-word">
                    {gameOver ? answer : guessedWord()}
                </p>
                <div className="btns">{gameState}</div>
            </div>
            {/* <div className="Hangman-reset">
                <button id='reset' value="colors" onClick={reset}>Restart?</button>
                <form>
                    <label htmlFor="group">Guess About: </label>
                    <select name="group" id="group" value={group} onChange={handleChange}>
                    <option value="hardware">Computer Hardware</option>
                <option value="programming">Programming Languages</option>
                <option value="frameworks">Software Frameworks</option>
                <option value="operating_systems">Operating Systems</option>
                <option value="networks">Computer Networks</option>
                    </select>
                </form>
            </div> */}
        </div>
    </Hangman>
  )
}

const FxHangman1 = {
    maxWrong: 6,
    images: [img0,img1,img2,img3,img4,img5,img6]
}

export default FxHangman