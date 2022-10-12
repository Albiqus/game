
import { Helmet } from 'react-helmet';
import './App.css';
import { DeathModalContainer } from './components/DeathModal/DeathModal';
import { GameAreaContainer } from './components/GameArea/GameArea';
import { InitialModalContainer } from './components/InitialModal/InitialModal';
import { MenuModalContainer } from './components/MenuModal/MenuModal';
import { RegisterModalContainer } from './components/RegisterModal/RegisterModal';
import { ScoreContainer } from './components/Score/Score';

function App() {
  return (
      <div className="App">
           <Helmet>
                <meta charSet="utf-8" />
                <title>albiqusGame</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <InitialModalContainer />
          <RegisterModalContainer/>
          <GameAreaContainer />
          <ScoreContainer />
          <DeathModalContainer />
          <MenuModalContainer />
    </div>
  );
}

export default App;
