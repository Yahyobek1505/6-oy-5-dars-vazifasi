import React from "react";
import "./index.css"

function LastForm() {
  return(

    <>
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
</>

  )
}

export default LastForm;
