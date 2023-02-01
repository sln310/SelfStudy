import React from "react";
import { List } from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "display before click" };
  }

  changeDescription() {
    this.setState({
      description: "display after click",
    });
  }

  render() {
    const { description } = this.state;
    return (
      <div>
        {description}
        <List title="Language List" />
        <button onClick={() => this.changeDescription()}>button</button>
      </div>
    );
  }
}

export default App;
