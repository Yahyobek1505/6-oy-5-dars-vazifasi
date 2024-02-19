import React from "react";
import "./index.css"

function FirstForm() {
  return(
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
  </div>
)
}
export default FirstForm;
