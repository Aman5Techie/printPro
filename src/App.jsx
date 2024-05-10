import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Frontpage from "./pages/frontpage";
import Printdocs from "./pages/printdocs";
import Dashboard from "./pages/dashboard";
import Printout from "./pages/printout";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/users" element = {<Frontpage/>}/>
          <Route path="/print" element = {<Printdocs/>}/>
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path="/" element = {<Printout/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
