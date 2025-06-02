import "./App.css";
import ArtistInfo from "./components/pages/ArtistInfo";
import { EventInfo } from "./components/pages/EventInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EventInfo />} />
          <Route path="/artist/:id" element={<ArtistInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
