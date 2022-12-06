import { useEffect, useState } from "react";
import "./App.css";
import { DatesSlider } from "./Components/DatesSlider.tsx/DatesSlider";
import { Dates } from "./Components/FactsSlider/FactsSlider";
import { Title } from "./Components/Title/Title";

function App(props: any) {
  const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => setCount(count + 1), 1000);
    }, [count]);

    return <main>{count}</main>;
  };
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
      <Title />
      <Counter />
      <DatesSlider date1={"2015"} date2={"2022"} />
      <Dates children={props.children} />
    </div>
  );
}

export default App;
