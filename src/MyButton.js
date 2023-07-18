import { useState } from "react";

let name = "marwa";
const MyButton = () => {
  const [name, setName] = useState("marwa");

  function buttonClicked() {
    if (name == "marwa") {
      setName("Ferdouse");
    } else {
      setName("marwa");
    }
  }
  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
      <h1>{name}</h1>
    </div>
  );
};

export default MyButton;
