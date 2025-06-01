import { useState, useEffect, useMemo, useCallback } from "react";
import { ImagePortion } from "./ImagePortion";
// import hamil from "../../assets/images/Hamilton.png";
import black from "../../assets/images/BlackWall.png";
// import burger from "../../assets/images/Burger.png";
import { MoreCardDetails } from "./MoreCardDetails";
import eventData from "../../data/events.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

// export const HamiltonImage = ({ className }) => {
//   return (
//     <img src={hamil} alt="Hamilton For More Like This" className={className} />
//   );
// };

export const MoreLikeCard = () => {
  const [likedCards, setLikedCards] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const cards = eventData[0].more.map((event) => ({
    id: event.id,
    title: event.title,
    city: event.location,
    comment: event.description,
    advertisement: "Get tickets starting at",
    price1: event.prices[0]?.price,
    price2: event.prices[1]?.price,
    admission1: event.prices[0]?.type,
    admission2: event.prices[1]?.type,
    imageUrl: event.imgUrl,
  }));

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // const cards = [
  //   {
  //     id: 1,
  //     title: "Hamilton",
  //     city: "New York City, NY",
  //     comment:
  //       "First staged in 2011, the play is a satirical examination of the beliefs and practices of The Church of Jesus Christ of Latter-day Saints.",
  //     advertisement: "Get tickets starting at",
  //     price1: "$50",
  //     price2: "$100",
  //     admission1: "Member",
  //     admission2: "Standard",
  //   },
  //   {
  //     id: 2,
  //     title: "Californication",
  //     city: "Los Angeles, California, CA",
  //     comment: "Lorem Ipsum Dolor",
  //     advertisement: "Get tickets starting at",
  //     price1: "$70",
  //     price2: "$221",
  //     admission1: "Member",
  //     admission2: "Standard",
  //   },
  //   {
  //     id: 3,
  //     title: "Glory of Love",
  //     city: "Salt Lake City, Utah",
  //     comment: "Lorem Ipsum Dolor",
  //     advertisement: "Get tickets starting at",
  //     price1: "$30",
  //     price2: "$150",
  //     admission1: "Member",
  //     admission2: "Standard",
  //   },
  //   {
  //     id: 4,
  //     title: "Don't Stop Believin",
  //     city: "Detroit Michigan, Detroit City",
  //     comment: "Lorem Ipsum Dolor",
  //     advertisement: "Get tickets starting at",
  //     price1: "$11",
  //     price2: "$57",
  //     admission1: "Member",
  //     admission2: "Standard",
  //   },
  // ];
  // const hamilStyle = {
  //   backgroundImage: `url(${hamil})`,
  //   backgroundSize: "contain",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   alignItems: "center",
  //   height: "58vh", // full viewport height
  //   width: "100vw", // full viewport width
  //   display: "block",
  //   // rotate the div
  //   // position: "relative", // needed for absolute positioning of inner h1
  // };

  const divStyle = {
    backgroundImage: `url(${black})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    alignItems: "center",
    height: "58vh", // full viewport height
    width: "100vw", // full viewport width
    display: "block",
    // rotate the div
    // position: "relative", // needed for absolute positioning of inner h1
  };

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
    marginTop: "80px",
    marginLeft: "22px",
    textAlign: "justify",
    overflowWrap: "break-word",
    width: "80%",
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
    marginTop: "135px",
    textAlign: "left",
  };

  const price1Style = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "18px",
    marginLeft: "79px",
    marginTop: "31px",
    textAlign: "left",
  };

  const price2Style = {
    // counter-rotate the text to keep it straight

    margin: 0,
    color: "white",
    fontSize: "18px",
    marginLeft: "179px",
    marginTop: "0px",
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
    marginTop: "0px",
    textAlign: "left",
  };

  const pStyle = {
    // counter-rotate the text to keep it straight

    // position h1 inside the rotated div
    margintop: "30px",
    top: "10%",
    left: "47%",

    transformBox: "fill-box",

    margin: 0,
    color: "white",
  };

  const boxStyle = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "300px",
    height: "200px",
    display: "block",
    position: "relative",
  });

  const boxStyle2 = (image) => ({
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "300px",
    height: "340px",
    display: "block",
    backgroundSize: "cover",
    position: "relative",
  });

  const heartContainerStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 2,
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

    boxSizing: "border-box",

    gap: 0, // no space between items
    padding: 0,
    margin: 0,
    lineHeight: 0, // avoid vertical white space
  };

  const outerContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // center cards in row
    gap: "16px", // spacing between cards
    padding: "20px",
    backgroundColor: "#111", // optional dark background
  };

  const cardContainerStyle = {
    width: "300px", // card width
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
  };

  return (
    <>
      <h2>More Like This</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={-250}
        slidesPerView={-1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
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
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
