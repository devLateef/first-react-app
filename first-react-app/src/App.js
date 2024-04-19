import "./App.css";
import React, { useState } from "react";
import Main from "./landing-page/landing";
import { UserForm } from "./landing-page/form";

function App() {
  let [details, setDetails] = useState([
    {
      name: "Lateef",
      qty: 4,
      good: "bags",
    },
    {
      name: "Dammy",
      qty: 2,
      good: "shoes",
    },
  ]);

  let [name, setName] = useState("");
  let [quant, setQuant] = useState("");
  let [gud, setGud] = useState("");

  const increase = (ind) => {
    let allDetails = [...details];
    let foundDetails = allDetails.find((item, index) => index === ind);
    foundDetails.qty++;
    setDetails(allDetails);
  };

  const deleteItem = (ind) => {
    let allItems = [...details];
    if(window.confirm('Are you sure?')===true){
      let restItem = allItems.filter((_, i) => i !== ind);
      setDetails(restItem);
    }
  };

  const addValue = () => {
    if(name !== '' || quant !== '' || gud !== ''){
      let allValues = {
        name,
        qty: quant,
        good: gud,
      };
      // setDetails([...details, allValues]);
      setDetails((prev) => [...prev, allValues]);
      setName('')
      setQuant('')
      setGud('')
    }else{
      alert('Fill in all fields')
    }

  };
  return (
    <div className="App">
      <UserForm
        name={name}
        qty={quant}
        good={gud}
        setName={setName}
        setQuant={setQuant}
        setGud={setGud}
        addValue={addValue}
      />
      {details.map((item, i) => (
        <Main
          key={i}
          name={item.name}
          qty={item.qty}
          good={item.good}
          increment={() => increase(i)}
          deleteItem={() => deleteItem(i)}
        />
      ))}
    </div>
  );
}

export default App;
