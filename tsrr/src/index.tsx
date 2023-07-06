import React from "react";
import ReactDOM from "react-dom/client";

interface AppProps {
  color?: string;
}

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

class App extends React.Component<AppProps> {
  state = { counter: 0 }; // must name as state

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

// functional components
// const App = (props: AppProps): JSX.Element => {
//   return <div>{props.color}</div>
// }

root.render(<App color="red" />);
