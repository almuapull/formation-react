
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [colorMode, setColorMode] = useState("firstColor");

  const Increment = () => {
    setCount(count + 1);

    setColorMode((e) =>
      e === "firstColor" ? "secondColor" : "firstColor"
    );
  };

  const ChangeColor = ({ color }) => {
    const ButtonStyle = {
      background: color === "firstColor" ? "blue" : "red",
      color: "white",
      padding: "20px",
      margin: "30px",
      border: "none",
    };

    return (
      <button style={ButtonStyle}>
        Nombre de clics : {count}
      </button>
    );
  };

  return (
    <>
      <button onClick={Increment}>Click</button>

      <ChangeColor color={colorMode} />
    </>
  );
};

export default App;

