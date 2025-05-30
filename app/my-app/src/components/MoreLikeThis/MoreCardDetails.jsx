import React from "react";
export const MoreCardDetails = ({
  title,
  city,
  comment,
  advertisement,
  price1,
  price2,
  admission1,
  admission2,
}) => {
  const titleStyle = {
    // counter-rotate the text to keep it straight

    color: "white",
    fontSize: "18px",
    wordWrap: "break-word",

    margin: 0,
    marginLeft: "22px",
    marginTop: "25px",
    textAlign: "left",
  };

  const cityStyle = {
    // counter-rotate the text to keep it straight

    color: "white",
    fontSize: "14px",
    wordWrap: "break-word",

    margin: 0,
    marginLeft: "22px",
    marginTop: "27px",
    textAlign: "left",
  };

  const comStyle = {
    // counter-rotate the text to keep it straight

    color: "white",
    fontSize: "12px",
    wordWrap: "break-word",

    lineHeight: "1.3",
    margin: 0,
    marginTop: "30px",
    marginLeft: "22px",
    textAlign: "justify",
    overflowWrap: "break-word",
    width: "80%",
    paddingBottom: "20px",
    borderBottom: "dashed 1px white",
  };

  const burgerStyle = {
    position: "absolute", // position h1 inside the rotated div
    top: "-5px",
    left: "-15%",
    transformOrigin: "center",
    transformBox: "fill-box",
    width: "16px",

    objectFit: "contain",
  };

  const adsStyle = {
    // counter-rotate the text to keep it straight

    color: "white",
    fontSize: "12px",
    wordWrap: "break-word",

    margin: 0,
    marginLeft: "79px",
    marginTop: "15px",
    textAlign: "left",
  };

  const price1Style = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "18px",
    marginLeft: "79px",
    marginTop: "21px",
    textAlign: "left",
  };

  const price2Style = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "18px",
    marginLeft: "179px",
    marginTop: "-24px",
    textAlign: "left",
  };

  const memStyle = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "11px",
    marginLeft: "79px",
    marginTop: "25px",
    textAlign: "left",
  };

  const standStyle = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "11px",
    marginLeft: "179px",
    marginTop: "-15px",
    textAlign: "left",
  };

  return (
    <>
      <h1 style={titleStyle}>{title}</h1>
      <h1 style={cityStyle}>{city}</h1>
      <h3 style={comStyle}>{comment}</h3>

      <h3 style={adsStyle}>&nbsp;&nbsp;{advertisement}</h3>
      <h1 style={price1Style}>{price1}</h1>
      <h1 style={price2Style}>{price2}</h1>
      <h5 style={memStyle}>{admission1}</h5>
      <h5 style={standStyle}>{admission2}</h5>
    </>
  );
};
