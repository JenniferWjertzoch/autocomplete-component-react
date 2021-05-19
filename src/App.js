import './App.css';
import Autocomplete from './Autocomplete';
import animals from './animals';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="container-headline">Autocomplete Component</h1>
        <Autocomplete items={ animals } />
      </div>
    </div>
  );
}

export default App;
