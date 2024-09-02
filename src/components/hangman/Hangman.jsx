import React, { useReducer, useEffect } from 'react';
import WordDisplay from './Word';
import Keyboard from './Keyboard';
import { getRandomWord, hasPlayerWon, hasPlayerLost } from './HangmanUtils';
import { hangmanReducer, initialState } from './hangmanReducer';
import './Hangman.css';

const Hangman = () => {
  const [state, dispatch] = useReducer(hangmanReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_WORD', payload: getRandomWord() });
  }, []);

  const { word, guessedLetters, wrongGuesses } = state;

  const isWinner = hasPlayerWon(word, guessedLetters);
  const isLoser = hasPlayerLost(wrongGuesses);

  const handleLetterClick = (letter) => {
    if (guessedLetters.includes(letter)) return;
    dispatch({ type: 'GUESS_LETTER', payload: letter });
  };

  const handleRestart = () => {
    dispatch({ type: 'SET_WORD', payload: getRandomWord() });
    dispatch({ type: 'RESET' });
  };

  return (
    <div className="hangman">
      <h1 className="hangman-title">Ahorcado</h1>
      <WordDisplay word={word} guessedLetters={guessedLetters} />
      <div className="hangman-drawing">Intentos: {wrongGuesses}</div>
      {!isWinner && !isLoser && <Keyboard onLetterClick={handleLetterClick} />}
      {isWinner && <p className="message winner">¡Enhorabuena! Has ganado.</p>}
      {isLoser && <p className="message loser">¡Lo siento! La palabra era {word}.</p>}
      <button className="restart-button" onClick={handleRestart}>Reiniciar Partida</button>
    </div>
  );
}

export default Hangman;
