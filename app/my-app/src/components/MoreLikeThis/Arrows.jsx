import React from 'react'
import arrow from '../../assets/images/arrows.png'

const arrowRight = {
  width: "48px",
  height: "48px",
  borderRadius: "50px",
  backgroundColor: "#1E1F22",
  display: "grid",
  placeContent: "center",
  cursor: "pointer"
}
const arrowLeft = {
  width: "48px",
  height: "48px",
  transform: "rotate(180deg)",
  borderRadius: "50px",
  backgroundColor: "#1E1F22",
  display: "grid",
  placeContent: "center",
  cursor: "pointer"
}

const Arrows = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      <div style={arrowLeft}><img src={arrow} alt="arrow" /></div>
      <div style={arrowRight}><img src={arrow} alt="arrow" /></div>
    </div>
  )
}

export default Arrows