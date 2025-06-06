import { useState } from "react";
import Card, { CardHeader, CardActions, CardContent } from "./card";
import SocialInfo from "./SocialInfo";
import UsefulInfo from "./UsefulInfo";
import InfoIcon from "../../../assets/images/info.svg";

const Drawer = ({
  event,
  type,
}: {
  event: {
    price: string;
    usefulInfo: { title: string; icon: string }[];
    socials: { name: string; icon: string }[];
  };
  type: "aboutEvent" | "aboutArtist";
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* Drawer backdrop */}
      {isDrawerOpen && (
        <div
          className="drawer-backdrop"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 8,
            opacity: isDrawerOpen ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
          onClick={closeDrawer}
        />
      )}

      <div className="drawer">
        {/* X Icon Button */}

        {isDrawerOpen && (
          <button
            className="drawer_close_btn"
            onClick={closeDrawer}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "transparent",
              border: "none",
              zIndex: 1,
              cursor: "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}

        {/* Expandable content (animates upward from bottom, stops at header) */}
        <div
          className="drawer_expandable_content"
          style={{
            maxHeight: isDrawerOpen ? "80vh" : "0",
            transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            overflow: "hidden",
            opacity: isDrawerOpen ? 1 : 0,
            transform: isDrawerOpen ? "translateY(0)" : "translateY(10px)",
            transitionProperty: "max-height, opacity, transform",
            transitionDuration: "0.4s, 0.3s, 0.3s",
            transitionDelay: isDrawerOpen ? "0s, 0.1s, 0.15s" : "0s, 0s, 0s",
          }}
        >
          <Card className="drawer_card_content">
            <CardHeader title="Useful Info" />

            <span className="separator" />

            {/* Card Content */}
            <CardContent
              styles={{
                flex: "1 1 100%",
              }}
            >
              <UsefulInfo usefulInfo={event.usefulInfo} />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "1rem",
                  padding: "0.5rem",
                  justifyContent: "space-evenly",
                }}
              >
                <SocialInfo socialLinks={event.socials} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Header section (fixed at bottom - stopping point) */}
        <Card
          className="drawer_card"
          styles={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            borderRadius: 0,
            zIndex: 10,
          }}
        >
          {/* Card Header */}
          {type === "aboutEvent" && (
            <CardHeader title={"Price Range"} subtitle={event.price} />
          )}

          {/* Card action */}
          <CardActions
            styles={{
              width: type === "aboutEvent" ? "50%" : "100%",
              justifyContent: "space-evenly",
            }}
          >
            <button className="drawer_btn" onClick={toggleDrawer}>
              {!isDrawerOpen ? <img src={InfoIcon} alt="Info Icon" /> : "Less"}
            </button>
            <button>
              {type === "aboutEvent" ? "Buy Tickets" : "Follow Artist"}
            </button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default Drawer;
