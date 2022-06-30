import "./App.css";
import Main from "./components/main";
import Content from "./components/content/content";
import Cabecalho from "./components/header/cabecalho";
import Rodape from "./components/footer/rodape";
import Inicio from "./components/content/inicio";
import Doces from "./components/content/doces";
import Sobre from "./components/content/sobre";

import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/inicio" element={<Inicio/>}/>
          <Route path="/doces" element={<Doces/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
