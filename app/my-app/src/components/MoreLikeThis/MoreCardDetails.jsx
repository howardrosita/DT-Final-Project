import React from "react";
import ticket from "../../assets/images/ticket-icon.svg";
export const MoreCardDetails = ({
  title,
  city,
  comment,
  advertisement,
  price1,
  price2,
  admission1,
  admission2,
  type,
}) => {
  const titleStyle = {
    // counter-rotate the text to keep it straight

    color: "white",
    fontSize: "18px",
    wordWrap: "break-word",

    margin: 0,
    marginLeft: "22px",
    marginTop: "1rem",
    textAlign: "left",
  };

  const cityStyle = {
    // counter-rotate the text to keep it straight

    color: "rgba(250,250,250,0.6)",
    fontSize: "14px",
    wordWrap: "break-word",

    margin: 0,
    marginLeft: "22px",
    marginTop: "4px",
    textAlign: "left",
  };

  const comStyle = {
    // counter-rotate the text to keep it straight

    color: "rgba(250,250,250,0.6)",
    fontSize: "12px",
    wordWrap: "break-word",

    lineHeight: "1.3",
    margin: 0,
    marginTop: "12px",
    marginLeft: "22px",
    textAlign: "left",
    overflowWrap: "break-word",
    width: "80%",
    paddingBottom: "20px",
  };

  const adsStyle = {
    // counter-rotate the text to keep it straight

    color: "rgba(250,250,250,0.6)",
    fontSize: "12px",
    wordWrap: "break-word",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: 0,
    marginLeft: "79px",
    marginTop: "19px",
    textAlign: "left",
  };

  const price1Style = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "18px",
    marginLeft: "79px",
    marginTop: "18px",
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
    color: "rgba(250,250,250,0.6)",
    fontSize: "11px",
    marginLeft: "79px",
    marginTop: "2px",
    textAlign: "left",
  };

  const standStyle = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "rgba(250,250,250,0.6)",
    fontSize: "11px",
    marginLeft: "179px",
    marginTop: "-15px",
    textAlign: "left",
  };

  const dividerStyle = {
    width: "100%",
    border: "dashed 1px #0F0F0F",
  };

  const ticketStyle = {
    width: "1rem",
    height: "12px",
  };

  return (
    <>
      <h1 style={titleStyle} className="more-title" title={title}>
        {title}
      </h1>
      <h1 style={cityStyle}>{city}</h1>
      <h3 style={comStyle}>{comment}</h3>
      {type !== "known" && (
        <>
          <div style={dividerStyle}></div>
          <h3 style={adsStyle}>
            <img src={ticket} alt="ticket" style={ticketStyle} />
            {advertisement}
          </h3>
          <h1 style={price1Style}>{price1}</h1>
          <h1 style={price2Style}>{price2}</h1>
          <h5 style={memStyle}>{admission1}</h5>
          <h5 style={standStyle}>{admission2}</h5>
        </>
      )}
    </>
  );
};
