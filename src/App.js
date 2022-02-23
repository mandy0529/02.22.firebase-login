import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Modal from "./components/Modal";
import SignUp from "./components/SignUp";
import User from "./components/User";

function App() {
  const {
    alert: { show, msg },
  } = useSelector((state) => state.modal);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
      {show && <Modal msg={msg} />}
    </div>
  );
}

export default App;
