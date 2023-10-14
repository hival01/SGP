import { useState, useEffect } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { NavBar } from "./Components/NavBar";
import { TagLine } from "./Components/TagLine";
import { Cards } from "./Components/Cards";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";

function App() {
  let initialUserInfo = localStorage.getItem("userInfo");
  if (initialUserInfo === "undefined") initialUserInfo = "{}";
  const [userInfo, setInfo] = useState(JSON.parse(initialUserInfo));

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);
  const logOut = () => {
    setInfo(() => null);
    navigate("/");
  };

  return (
    <>
      <NavBar userInfo={userInfo} logout={logOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setInfo={setInfo} />} />
      </Routes>
      {/* <TagLine></TagLine>
      <Cards></Cards> */}
    </>
  );
}

export default App;