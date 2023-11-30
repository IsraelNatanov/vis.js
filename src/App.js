
import './App.css';
import Graph2 from './component/graph2';
import VisNetwork from './component/networkPro';
import Graph3dVis from './component/graph3dExmple';
import TimelineComponent from './component/timelineExmple';

function App() {
  return (
    <div className="App">
   <VisNetwork/>
      <Graph2/>
      <Graph3dVis/>
      <TimelineComponent/>
    </div>
  );
}

export default App;
