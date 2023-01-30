import './App.css';
import {BrowserRouter} from "react-router-dom";
import Views from "./Views.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Views />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
