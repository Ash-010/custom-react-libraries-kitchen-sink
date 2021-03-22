import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./custom/CustomButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="none"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton name="Learn React"></CustomButton>
        </a>
      </header>
    </div>
  );
}

export default App;
