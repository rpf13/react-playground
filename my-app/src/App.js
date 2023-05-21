import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      {/* adding multiple props, separated by space */}
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="33" />
      {/* Using a prop in the classful state component */}
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike" />
    </div>
  );
}

export default App;
