import { useState, useEffect, useMemo, useCallback } from "react";
import { ImagePortion } from "./ImagePortion";
import hamil from "../../assets/images/Hamilton.png";
import black from "../../assets/images/BlackWall.png";
import burger from "../../assets/images/Burger.png";
import { MoreCardDetails } from "./MoreCardDetails";
import eventData from "../../data/events.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../assets/css/MoreLikeCard.css";

import { Navigation, Pagination } from "swiper/modules";

export const HamiltonImage = ({ className }) => {
  return (
    <img src={hamil} alt="Hamilton For More Like This" className={className} />
  );
};

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

  const cardContainerStyle = {
    width: "300px", // card width
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
  };

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={-590}
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
  );
};
