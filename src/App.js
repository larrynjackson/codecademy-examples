import './styles.css';


import {InjectedAttributes} from './components/InjectedAttributes';
import {ProfileNavBar} from './components/ProfileNavBar';
import {ListApp} from './components/ListApp';
import {TickingClock} from './components/TickingClock';
import UseStateColorPicker from './components/UseStateColorPicker';
import ConvertAppClass from './components/ConvertAppClass';
import ConvertAppFunction from './components/ConvertAppFunction';
import Timer from './components/Timer';
import {GuineaPigsContainer} from './container/GuineaPigsContainer';
import Forecast from './components/Forecast';
import Shop from './components/Shop';
import {Parent} from './components/Parent';
import ParentFun from './components/ParentFun';
import RouteExample from './components/RouteExample';


function App() {
  return (
    <div className="App">
	<RouteExample />
	<Parent />
	<ParentFun />
	<InjectedAttributes />
	<ProfileNavBar />
	<ListApp />
	<TickingClock />
	<UseStateColorPicker />
	<ConvertAppClass />
	<ConvertAppFunction />
	<Timer />
	<GuineaPigsContainer />
	<Forecast />
	<Shop />
    </div>
  );
}

export default App;
