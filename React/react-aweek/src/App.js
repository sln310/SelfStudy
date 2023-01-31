import { useState } from "react";
import { List } from "./List";

function App() {
  const [description, setDescription] = useState("display before click");
  const changeDescription = () => {
    setDescription("display after click");
  };

  return (
    <div>
      {description}
      <List title="Language list" />
      <button onClick={changeDescription}>button</button>
    </div>
  );
}

export default App;
