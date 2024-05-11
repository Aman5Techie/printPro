import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Frontpage from "./pages/frontpage";
import Printdocs from "./pages/printdocs";
import Dashboard from "./pages/dashboard";
import Printout from "./pages/printout";
import Signup from "./pages/signup";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<Frontpage />} />
          <Route path="/print" element={<Printdocs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Printout />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
