import Tile from './Tile'

function Board({ currentWord, guesses }) {
  const emptyBoard = Array(6).fill(Array(5).fill(''))

  return (
    <div className="board">
      {emptyBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((letter, colIndex) => (
            <Tile
              key={colIndex}
              letter={
                rowIndex < guesses.length
                  ? guesses[rowIndex].word[colIndex]
                  : rowIndex === guesses.length
                  ? currentWord[colIndex] || ''
                  : ''
              }
              status={
                rowIndex < guesses.length
                ? guesses[rowIndex].result[colIndex]
                : ''
              }
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board

