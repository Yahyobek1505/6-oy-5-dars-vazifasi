import React from "react";
import "./index.css"
import globe from "../../assets/image/globe.svg";
import insta from "../../assets/image/instagram.svg";
import telegram from "../../assets/image/telegram.svg";
import facebook from "../../assets/image/facebook.svg";
import gitHub from "../../assets/image/gitHub.svg";

function Links() {
  return(

    <>
<h4>Linklar</h4>
          <div className="links">
            <img src={globe} alt="" />
            <img src={insta} alt="" />
            <img src={telegram} alt="" />
            <img src={facebook} alt="" />
            <img src={gitHub} alt="" />
          </div>
</>
  )
}
  export default Links;
