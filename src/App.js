
import './App.css';
import Contador from './components/Contador';
import Lista from './components/Lista';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div><Contador></Contador></div>
        <Lista></Lista>
      </header>
    </div>
  );
}

export default App;
