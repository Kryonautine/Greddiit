import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Start from "./components/main/Start";
import Profile from "./components/main/Profile";
import Dashboard from './components/common/Dashboard';
import MySubgreddiits from './components/main/MySubgreddiits';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <header className="App-header">
        <Routes>
          <Route exact path="/" index element={<Start />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/mysubgreddiits" element={<MySubgreddiits />} />
        </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
