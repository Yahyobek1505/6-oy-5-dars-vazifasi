import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src="https://picsum.photos/200/300?image=102" alt="" />
          </div>
          <div className="naigation">
            <ul className="nav-menu">
              <li>Vakansiyalar</li>
              <li>Kandidatlar</li>
              <li>Kompaniyalar</li>
              <li>Vakansiyalar</li>
              <li>Ta'lim</li>
            </ul>
          </div>
          <div className="login">
            <span>O'zb</span>
            <button className="btn">Boshlash</button>
          </div>
        </div>
      </div>
        <div className="main-section">
          <h2 className="title">Kompaniya ma'lumotlari</h2>
          <p className="comment">Kompaniya haqidagi ma'lumotlarni kiriting</p>
          <span className="acount">
            <img className="circle" src="https://picsum.photos/200/300" alt="" />
            <a href="#">Yuklash</a>
          </span>
        </div>
    </>
  );
}

export default App;
