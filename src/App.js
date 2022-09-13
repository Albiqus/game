
import './App.css';
import { GameAreaContainer } from './components/GameArea/GameArea';
import { ScoreContainer } from './components/Score/Score';

function App() {
  return (
      <div className="App">
          <GameAreaContainer />
          <ScoreContainer/>
    </div>
  );
}

export default App;
