import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import { SideBar } from "./SideBar";
import { Tags } from "./Tags.jsx";
import bannerImg from "../../assets/images/banner-bg.png";
import { getData } from "../../services/banner.service";
import { HeroText } from "./HeroText";
import NavBackground from "./NavBackground";
export const HeroMain = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [event, setEvent] = useState();

  useEffect(() => {
    getData().then((data) => {
      setEvent(data[0]);
    });
  }, []);
  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  if (!event) return <div>Loading...</div>;
  return (
    <>
      {/* <NavBackground event={event} />
      <NavBar /> */}
    </>

    // <div
    //   style={{
    //     backgroundImage: `url(${bannerImg})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div>
    //     <NavBar toggleSidebarVisibility={toggleSidebarVisibility} />
    //     <SideBar isSidebarVisible={isSidebarVisible} />
    //   </div>
    //   <div
    //     style={{
    //       padding: "50px 120px",
    //       marginTop: "158px",
    //     }}
    //   >
    //     <HeroText event={event} />
    //     {event.tags && <Tags tags={event.tags} />}
    //   </div>
    // </div>
  );
};
