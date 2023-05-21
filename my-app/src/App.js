import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      {/* adding multiple props, separated by space */}
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="33" />
    </div>
  );
}

export default App;
