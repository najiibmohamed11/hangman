import { useState } from 'react';

import img0 from "./img/0.png"
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import img6 from "./img/6.png"
import cry from "./img/cry.gif"
import wrongimg from './img/wrongimg.png'
import happy from './img/happy-svgrepo-com.svg'
import winerImg from './img/resualt.png'
import Titlesmall from "./img/Titlesmall.png"
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
    overflow: hidden;   // Prevents any scrolling within the Hangman component


`
const Next=styled.div`
  padding: 10px 20px;
    margin-top: 20px;
    border: none;
    background-color: #4CAF50;
    color: white;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }

`
const Exit=styled.div`
  padding: 10px 20px;
    margin-top: 20px;
    border: none;
    color: red;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;


`
const HolleyLosser=styled.div`


`
const GusedWrong=styled.div`
    width: 100%;
    color: black;
    background-color: #D6A67D;
    margin-left: 20px;
    

    background-size: cover;


`

const FxHangman = () => {
    const {maxWrong, images} = FxHangman1
    const [nWrong, setNWrong] = useState(0)
    const [guessed, setGuessed] = useState(new Set())
    // const [answer, setAnswer] = useState(randomWord())
    const { group, setGroup ,setAnswer,answer ,setPlay} = usePlay();


    const reset = () => { 
        setNWrong(0)
        setGuessed(new Set())
        setAnswer(randomWord(group))
        setGroup(group)
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
        return "abcdefghijklmnopqrstuvwxyz+ ".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={guessed.has(ltr)}>
                {ltr}
            </button>
        ))
    }
    const Losser = () => {
        return  (
            <HolleyLosser>
                <Next onClick={reset}>TryAgain</Next>
                <Exit
                 onClick={()=>{
                    setPlay(false)
                    setAnswer(randomWord())
                    setGroup("hardware")
                    
                    }}
                >Exit</Exit>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/SMirC-cry.svg" alt="" style={{width:"50px"}} width={50} height={50} />
             
            </HolleyLosser>
        )
    }
    
    const Winer = () => {
        return  (
            <HolleyLosser>
                <Next onClick={reset}>next</Next>
                <Exit onClick={()=>{
                    setPlay(false)
                    setAnswer(randomWord())
                    setGroup("hardware")}}>Exit</Exit>
                    <img src={happy} alt="" style={{width:"50px"}} width={50} height={50} />             
            </HolleyLosser>
        )
    }

    // const handleChange = (e) => { 
    //     const {value} = e.target;
    //     setGroup(value)
    //     setAnswer(randomWord(value))
    //     setNWrong(0)
    //     setGuessed(new Set())
    // }


    let alt = `${nWrong}/${maxWrong} guesses`;
    let isWinner = guessedWord().join("") === answer;
    let gameOver = nWrong >= maxWrong
    let gameState = generateButtons();
    if(isWinner) gameState = Winer();
    if(gameOver) gameState = Losser();
    


  return (
    <Hangman className="Hangman" img={background2}>
        <h1 className="Hangman-title"><img src={Titlesmall} alt="" width={300} /></h1>
        <div className="Hangman-flex">
            <div className="Hangman-counter">
                <img src={isWinner?winerImg:images[nWrong]} alt={alt} width={500} />
              <GusedWrong >
              <p>Guessed Wrong: {nWrong}</p>
              </GusedWrong>
            </div>
            <div className='left-side'>
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