import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Todo />
      </header>
    </div>
  );
}

export default App;
