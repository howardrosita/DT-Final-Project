import { useState } from "react";
import black from "../../assets/images/BlackWall.png";
import { MoreCardDetails } from "./MoreCardDetails";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Arrows from "./Arrows";

export const MoreLikeCard = ({ event, type }) => {
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const cards =
    event &&
    event.map((event) => ({
      id: event.id,
      title: event.title,
      city: event.location,
      comment: event.description,
      advertisement: "Get tickets starting at",
      price1: event.prices && event.prices[0]?.price,
      price2: event.prices && event.prices[1]?.price,
      admission1: event.prices && event.prices[0]?.type,
      admission2: event.prices && event.prices[1]?.type,
      imageUrl: event.imgUrl,
    }));

  const boxStyle = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "282px",
    height: "207px",
    display: "block",
    position: "relative",
  });

  const boxStyle2 = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "300px",
    height: "fit-content",
    display: "block",
    backgroundSize: "cover",
    position: "relative",
    paddingBottom: "1rem",
  });

  const heartContainerStyle = {
    position: "absolute",
    top: "12px",
    right: "12px",
    width: "24px",
    height: "24px",
    display: "grid",
    placeContent: "center",
    zIndex: 2,
  };

  const cardContainerStyle = {
    width: "282px", // card width
    maxHeight: "482px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
    borderRadius: "1rem",
    cursor: "pointer",
  };

  const headingContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <>
      {type === "more" && (
        <div style={headingContainerStyle} className="more-header">
          <h2>More Like This</h2>
        </div>
      )}
      {type === "upcoming" && (
        <div style={headingContainerStyle} className="more-header">
          <h2>Upcoming events</h2>
          <Arrows />
        </div>
      )}
      {type === "known" && (
        <div style={headingContainerStyle} className="more-header">
          <h2>Known for</h2>
          <Arrows />
        </div>
      )}
      <Splide
        options={{
          arrows: false,
          autoWidth: true,
          gap: "24px",
        }}
      >
        {cards &&
          cards.map((card) => (
            <SplideSlide key={card.id}>
              <div style={cardContainerStyle}>
                <div style={boxStyle(card.imageUrl)}>
                  <div style={heartContainerStyle}>
                    <span
                      onClick={() => toggleLike(card.id)}
                      style={{ fontSize: 24, cursor: "pointer" }}
                    >
                      {likedCards[card.id] ? "❤️" : "🤍"}
                    </span>
                  </div>
                </div>
                <div style={boxStyle2(black)}>
                  <MoreCardDetails
                    title={card.title}
                    city={card.city}
                    comment={card.comment}
                    advertisement={card.advertisement}
                    price1={card.price1}
                    price2={card.price2}
                    admission1={card.admission1}
                    admission2={card.admission2}
                    type={type}
                  />
                </div>
              </div>
            </SplideSlide>
          ))}
      </Splide>
    </>
  );
};
