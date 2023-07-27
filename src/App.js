import "./App.css";

import { useState } from "react";

function App() {
  const [deviceNameInputValue, setDeviceNameInputValue] = useState("")
  const [devices, setDevices] = useState(["iphone", "mac", "samsung", "windows"]) 
  const devicesList = devices.map((device) => {
    return <li>{device}</li>
  });
  function handleAddClick() { 
  //   const newDevices = [...devices];
  //   newDevices.push(deviceNameInputValue)
  //  setDevices(newDevices)
    
  setDevices([...devices,deviceNameInputValue ])
  }
  return (
    <div className="App" style={{paddingTop: "30px"}}>
      {/* <Header />
      <MyForms /> */}
      {/* <Scoreboard /> */}
      {devicesList}
      <label >Device Name:</label>
      <input value={deviceNameInputValue} onChange={(event) => {setDeviceNameInputValue(event.target.value)} }type="text" />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default App;
