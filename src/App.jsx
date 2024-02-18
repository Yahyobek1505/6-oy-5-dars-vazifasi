import React from "react";
import img from "../src/assets/image/logo.png";
import kompany from "../src/assets/image/kompany-img.svg";
import globe from "../src/assets/image/globe.svg";
import insta from "../src/assets/image/instagram.svg";
import telegram from "../src/assets/image/telegram.svg";
import facebook from "../src/assets/image/facebook.svg";
import gitHub from "../src/assets/image/gitHub.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={img} alt="" />
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
          <img className="circle" src={kompany} alt="" />
          <a href="#">Yuklash</a>
        </span>
        <div className="form-section">
          <form className="form">
            <label htmlFor="name">Kompaniya nomi *</label>
            <input
              className="inputName"
              type="text"
              placeholder="Kompaniya nomi"
            />
            <label htmlFor="email">Email *</label>
            <input type="email" className="inputName" placeholder="Email" />
            <label htmlFor="number">Telefon raqami *</label>
            <input type="number" placeholder="UZ +9989" className="inputName" />
          </form>
          <h4>Linklar</h4>
          <div className="links">
            <img src={globe} alt="" />
            <img src={insta} alt="" />
            <img src={telegram} alt="" />
            <img src={facebook} alt="" />
            <img src={gitHub} alt="" />
          </div>
        </div>
        <form className="davat">
          <div>
            <label htmlFor="name">Davlat</label>
            <input type="text" placeholder="Davlat" />
          </div>
          <div>
            <label htmlFor="name">Shahar</label>
            <input type="text" placeholder="Shahar" />
          </div>
        </form>
        <form className="form">
          <label htmlFor="name">Yashash joyi</label>
          <input type="text" placeholder="Joy" className="inputName" />

          <label htmlFor="name">Shahar</label>
          <input
            type="number"
            placeholder="Hodimlar soni"
            className="inputName"
          />

          <label htmlFor="name">Izoh</label>
          <textarea
            type="number"
            placeholder="Kompaniya haqida izoh qoldiring"
          />
        </form>
        <div className="row">
          <button className="prew">ORTGA</button>
          <button className="next">KEYINGISI</button>
        </div>
      </div>
    </>
  );
}

export default App;
