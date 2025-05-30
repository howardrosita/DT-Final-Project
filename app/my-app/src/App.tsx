import "./App.css";
import { EventInfo } from "./components/pages/EventInfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventInfo />} />
        {/* <Route path="/artist/:id" element={<ArtistInfo />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
