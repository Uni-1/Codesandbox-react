import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">Are you fine?</ColorfulMessage>
      <ColorfulMessage color="pink">I'm fine.</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
