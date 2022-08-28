import logo from "./logo.svg";
import "./App.css";
import UsingAxios from "./components/axiosCaller";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UsingAxios tabtext="React testing" />
    </div>
  );
}

export default App;
