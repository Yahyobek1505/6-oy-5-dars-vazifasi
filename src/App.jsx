import React from "react";
import kompany from "../src/assets/image/kompany-img.svg";
import "./App.css";
import Header from "./components/header";
import FirstForm from "./components/firstForm";
import Links from "./components/links";
import LastForm from "./components/lastForm";

function App() {
  return (
    <>
      <Header></Header>
      <div className="main-section">
        <h2 className="title">Kompaniya ma'lumotlari</h2>
        <p className="comment">Kompaniya haqidagi ma'lumotlarni kiriting</p>
        <span className="acount">
          <img className="circle" src={kompany} alt="" />
          <a href="#">Yuklash</a>
        </span>
        <FirstForm></FirstForm>
        <Links></Links>
        <LastForm></LastForm>
      </div>
    </>
  );
}

export default App;
