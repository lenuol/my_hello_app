import './App.css';
import { AloMundo } from './components/AloMundo';
import { AloMundoColorido } from './components/AloMundoColorido';

function App() {
  return (
    <>
      <AloMundo />
      <AloMundoColorido nome="Leonardo" cor="green" />
    </>
  );
}

export default App;
