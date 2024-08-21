import "./App.css";
import { useState } from "react";
import AppContext from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Whitelist from "./components/Whitelist/Whitelist.jsx";
import Dynmap from "./components/Dynmap/Dynmap.jsx";
import Modal from "./components/common/Modal/Modal.jsx";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  return (
    <AppContext.Provider value={{ modalOpen, setModalOpen, setModalContent }}>
      <div className="App">
        <Router>
          {modalOpen ? <Modal>{modalContent}</Modal> : ""}

          <Routes>
            <Route exact path="/" element={<Whitelist />}></Route>
            <Route path="/dynmap" element={<Dynmap />}></Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
