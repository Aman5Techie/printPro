import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Frontpage from "./pages/frontpage";
import Printdocs from "./pages/printdocs";
import Dashboard from "./pages/dashboard";
import Printout from "./pages/printout";
import Signup from "./pages/signup";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/seedocumnets" element={<Frontpage />} />
          <Route path="/print" element={<Printdocs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/printout" element={<Printout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
