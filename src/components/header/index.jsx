import React from "react";
import "./index.css"
import img from "../../assets/image/logo.png";
function Header() {
  return(
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
      </>
)
}
export default Header;


