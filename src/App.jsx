import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [coin, setCoin] = useState(30);
  const [cpuDraw, setCpuDraw] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [win, setWin] = useState(null);

  useEffect(() => {
  }, [coin, cpuDraw]);

  function decrement(event) {
    setCurrentUser("User");
    const value = parseInt(event.target.value);
    const updatedCoin = coin - value;
    // Check if the updated coin count is 1 and the user has chosen the last coin
    if (updatedCoin === 1) {
      setWin(currentUser);
      return;
    }

    setCoin(updatedCoin);
    cpu(updatedCoin);
  }

  function cpu(updatedCoin) {
    if (updatedCoin === 1) return;

    setCurrentUser("CPU");

    let draw = (updatedCoin % 7) - 1;

    if (updatedCoin > 7) {
      if (draw <= 0) {
        draw = Math.floor(Math.random() * 6) + 1;
      }

      setCpuDraw(draw);
      setCoin(prevCoin => prevCoin - draw);
    }
    else {
      setCpuDraw(updatedCoin - 1);
      setCoin(1);
      setWin(currentUser);
    }
  }

  function resetGame() {
    setCoin(30);
    setCpuDraw(0);
    setCurrentUser(null);
    setWin(null);
  }

  return (
    <>
      {win ? (
        <div>
          <h1>{currentUser === 'User' ? 'Congratulations! You win!' : 'CPU wins!'}</h1>
          <button onClick={resetGame}>Play Again</button>
        </div>
      ) : (
        <div>
          <h1>Coins available : <span>{coin}</span> 🪙</h1>

          <h5><span>Choose value to be decremented</span></h5>

          <input type="button" className="btn" value="1" onClick={decrement} disabled={coin < 1} />
          <input type="button" className="btn" value="2" onClick={decrement} disabled={coin < 2} />
          <input type="button" className="btn" value="3" onClick={decrement} disabled={coin < 3} />
          <input type="button" className="btn" value="4" onClick={decrement} disabled={coin < 4} />
          <input type="button" className="btn" value="5" onClick={decrement} disabled={coin < 5} />
          <input type="button" className="btn" value="6" onClick={decrement} disabled={coin < 6} />

          <h2>Computer chose : <span>{cpuDraw}</span></h2>

        </div>
      )}
    </>
  )
}

export default App
