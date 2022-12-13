import { useEffect } from "react";
import "./App.css";
import Application from "./Application";
import { RGBComp } from "./Components/RGBS COMP";
import { InputProps } from "./Components/RGBS COMP/input";

function App({ id, label, value }: InputProps) {
  // const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("./data.json");
      const dataresponse = await response.json();
      console.log(dataresponse);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Application />
      <RGBComp />
    </div>
  );
}

export default App;
