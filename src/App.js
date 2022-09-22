
import './App.css';
import { DeathModalContainer } from './components/DeathModal/DeathModal';
import { GameAreaContainer } from './components/GameArea/GameArea';
import { InitialModalContainer } from './components/InitialModal/InitialModal';
import { MenuModalContainer } from './components/MenuModal/MenuModal';
import { ScoreContainer } from './components/Score/Score';

function App() {
  return (
      <div className="App">
          <InitialModalContainer/>
          <GameAreaContainer />
          <ScoreContainer />
          <DeathModalContainer />
          <MenuModalContainer />
    </div>
  );
}

export default App;
