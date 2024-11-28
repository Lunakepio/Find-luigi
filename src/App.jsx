import { useEffect } from "react";
import { GameScreen } from "./GameScreen"
import { Wanted } from "./Wanted"
import { useGameStore } from "./store/store"
function App() {

  const { gameState } = useGameStore();
  useEffect(() => {
    const body = document.querySelector('body');

    if (gameState === 'pause') {
      setTimeout(() => {
        body.style.background = '#fffb14';
      }, 500);
    } else {
      body.style.background = 'black';
    }
    console.log(gameState);
  }, [gameState]);
  return (
    <div className="screen">
      <Wanted />
      <div className="game-screen">
        {gameState !== 'animation' && <GameScreen />}
      </div>

    </div>
  )
}

export default App
