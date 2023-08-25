import './App.css'
import MainDash from './MainDash/MainDash';
import Bar from './compo/Bar/Bar';
import RightSide from './compo/Bar/RightSide/RightSide';
function App() {
  return (
    <div className="App">
      <div className="AppGlass">
    <Bar/>
    <MainDash/>
    <RightSide/>
      </div> 
    </div>
  );
}

export default App;
