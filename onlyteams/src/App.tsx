import './App.css';
import { Dates } from './Components/Dates';
import { data } from './utils.tsx/data';

function App() {

  return (
    <div className="App">
      {data[0].category}
      {data[1].category}
     <Dates/>
    </div>
  );
}

export default App;
