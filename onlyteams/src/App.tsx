import { useEffect, useState } from "react";
import "./App.css";
import Application from "./Application";
import { DatesSlider } from "./Components/DatesSlider.tsx/DatesSlider";
import { Dates } from "./Components/FactsSlider/FactsSlider";
import { Title } from "./Components/Title/Title";

function App(props: any) {
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
      <Title />
      <DatesSlider date1={"2015"} date2={"2022"} />
      <Dates children={props.children} />
    </div>
  );
}

export default App;
