import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Frontpage from "./pages/frontpage";
import Printdocs from "./pages/printdocs";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Frontpage/>}/>
          <Route path="/print" element = {<Printdocs/>}/>
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
