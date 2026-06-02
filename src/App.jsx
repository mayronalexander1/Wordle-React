import {useState} from 'react'
import Board from './components/Board'
import './App.css'
import {loseMessages} from './data/messages'
import {words} from './data/secretWords'
import Contador from './components/Contador'

function App() {
  const [guesses, setGuesses] = useState([])
  const [currentWord, setCurrentWord] = useState('')
  const [secretWord] = useState(words[Math.floor(Math.random() * words.length)])
  const [gameOver, setGameOver] = useState(false)
  const [message, setMessage] = useState('')

  const checkWord = (word) => {
    return word.split('').map((letter, i) => {
      if (letter === secretWord[i]) return 'correct'
      if (secretWord.includes(letter)) return 'present'
      return 'absent'
    })
  }

  const handleKey = (e) => {
    const letter = e.key.toUpperCase()

    if (letter === 'ENTER') {
      if (currentWord.length === 5) {
        const result = checkWord(currentWord)
        if (result.every(r => r === 'correct')) {
          setGameOver(true)
          setMessage('Ganaste!!!')
        }
        setGuesses(prev => [...prev, { word: currentWord, result }])
        if (guesses.length === 5) {
          setGameOver(true)
          setMessage(loseMessages[Math.floor(Math.random() * loseMessages.length)])
        }
        setCurrentWord('')
      }
    } else if (letter === 'BACKSPACE') {
      setCurrentWord(prev => prev.slice(0, -1))
    } else if (/^[A-Z]$/.test(letter) && currentWord.length < 5) {
      setCurrentWord(prev => prev + letter)
    }
  }

  return (
    <div onKeyDown={handleKey} tabIndex={0} autoFocus>
      <h1>Wordle</h1>
      <Board currentWord={currentWord} guesses={guesses} />
      <p>{message}</p>
      <p>{secretWord}</p>
      <Contador/>
    </div>
  )
}

export default App

