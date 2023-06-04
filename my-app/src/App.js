import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreetings';
import FunctionalGreetingWithProps from './components/FunctionalGreetingsWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import EventBinding from './components/EventBinding';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import { SearchBar3 } from './components/SearchBar';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterConditional from './components/UseEffectCounterConditional';
import UseEffectCounterOneTime from './components/UseEffectCounterOneTime';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';
import HTTPRequests from './components/HTTPRequests';
import HTTPPost from './components/HTTPPost';
import HTTPHooks from './components/HTTPHooks';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting /> */}
      {/* adding multiple props, separated by space */}
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="33" /> */}
      {/* Using a prop in the classful state component */}
      {/* <StatefulGreeting greeting="I'm a stateful class component!" name="Mike" /> */}
      {/* Using async and callback functions */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <EventBinding /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <ControlledForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <SearchBar3 /> */}
      {/* <ControlledFormHooks /> */}
      {/* <UseStateWithArrays /> */}
      {/* <UseStateWithObjects /> */}
      {/* <UseEffectCounter /> */}
      {/* <UseEffectCounterConditional /> */}
      {/* <UseEffectCounterOneTime /> */}
      {/* <UseEffectCounterContainer /> */}
      {/* <HTTPRequests /> */}
      {/* <HTTPPost /> */}
      <HTTPHooks />
    </div>
  );
}

export default App;
