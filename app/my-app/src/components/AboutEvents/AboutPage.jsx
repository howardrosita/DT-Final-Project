import "./styles.css";
import React, { useEffect, useState } from "react";
import Card, { CardActions, CardContent, CardHeader } from "./components/card";
import SimilarShows from "./components/SimilarShows";
import Tags from "./components/Tags";
import UsefulInfo from "./components/UsefulInfo";
import SocialInfo from "./components/SocialInfo";
import Drawer from "./components/drawer";
import ImageIcon from "../../assets/images/image.svg";

const AboutPage = ({ event, type }) => {
  const [eventDetails, setEventDetails] = useState([]);

  useEffect(() => {
    if (event) {
      if (Array.isArray(event) && event.length > 0) {
        setEventDetails(event);
      } else if (!Array.isArray(event)) {
        setEventDetails([event]);
      }
    }
  }, [event]);

  return (
    <>
      {eventDetails && eventDetails.length > 0 && (
        <div className="about_event_container">
          {type === "aboutEvent" &&
            eventDetails.map((event) => (
              <React.Fragment key={`event-${event.id}-${event.title}`}>
                {/* Left component */}
                <div className="about_event_left">
                  <div className="header">
                    <h2>About the event</h2>
                    <p>{event.description}</p>
                  </div>

                  <Tags tags={event.vibe} />
                  <SimilarShows similarEvents={event.similar} />
                </div>
                {/* Right component sidebar */}
                <div className="hidden about_event_right">
                  {/* Price range card */}
                  <Card className="price_range_card">
                    {/* Card Header */}
                    <CardHeader title="Price Range" subtitle={event.price} />

                    {/* Card action */}
                    <CardActions>
                      <button>Tickets</button>
                    </CardActions>
                  </Card>

                  {/* Useful info card */}
                  <Card className="useful_info_card">
                    {/* Card Content */}
                    <CardContent>
                      {/* Header card */}
                      <CardHeader title="Useful Info" />
                      <span className="separator" />

                      <UsefulInfo usefulInfo={event.usefulInfo} />
                    </CardContent>

                    {/* Card Action */}
                    <CardActions>
                      <SocialInfo socialLinks={event.socials} />
                    </CardActions>
                  </Card>
                </div>

                <Drawer event={event} type={type} />
              </React.Fragment>
            ))}

          {type === "aboutArtist" &&
            eventDetails.map((artist) => (
              <React.Fragment key={`artist-${artist.id}-${artist.title}`}>
                {/* Left component */}
                <div className="about_event_left">
                  <div className="header">
                    <h2>About {artist.title}</h2>
                    <p>{artist.about1}</p>
                    <p>{artist.about2}</p>
                    <p>{artist.about3}</p>
                  </div>

                  <Tags tags={artist.vibe} />
                </div>

                {/* Right component similar to sidebar */}
                <div className="about_event_right">
                  {/* Media Gallery card */}
                  <Card
                    styles={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.5rem",
                      width: "fit-content",
                      margin: "0 0 auto auto",
                    }}
                  >
                    {/* Card content */}
                    <CardContent>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <img src={ImageIcon} alt="Media Gallery" />
                        <p
                          style={{
                            fontSize: "1rem",
                            margin: 0,
                          }}
                        >
                          Media Gallery
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Useful info card */}
                  <Card
                    styles={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Card Content */}
                    <CardContent>
                      {/* Header card */}
                      <CardHeader title="Useful Info" />
                      <span className="separator" />

                      <UsefulInfo usefulInfo={artist.usefulInfo} />
                    </CardContent>

                    {/* Card Action */}
                    <CardActions>
                      <SocialInfo socialLinks={artist.socials} />
                    </CardActions>
                  </Card>
                </div>

                <Drawer event={event} type={type} />
              </React.Fragment>
            ))}
        </div>
      )}
    </>
  );
};

export default AboutPage;
