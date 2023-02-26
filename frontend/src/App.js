import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./components/main/Start";
import Profile from "./components/main/Profile";
import Dashboard from './components/common/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" index element={<Start />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
