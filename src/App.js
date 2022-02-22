import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Modal from "./components/Modal";
import SignUp from "./components/SignUp";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Modal />
    </div>
  );
}

export default App;
