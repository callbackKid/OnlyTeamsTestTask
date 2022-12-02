import "./App.css";
import { Dates } from "./Components/Dates";

function App(props: any) {
  return (
    <div className="App">
      <Dates children={props.children} />
    </div>
  );
}

export default App;
