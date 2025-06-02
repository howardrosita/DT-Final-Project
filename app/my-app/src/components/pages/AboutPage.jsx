import "../AboutEvents/styles.css";
import React, { useEffect, useState } from "react";
import Artists from "../Artists/Artists";
import Card, {
  CardActions,
  CardContent,
  CardHeader,
} from "../AboutEvents/components/card";
import SimilarShows from "../AboutEvents/components/SimilarShows";
import Tags from "../AboutEvents/components/Tags";
import UsefulInfo from "../AboutEvents/components/UsefulInfo";
import SocialInfo from "../AboutEvents/components/SocialInfo";

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
      {eventDetails && eventDetails.length > 0 ? (
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

                  <Tags tags={event.tags} />
                  <SimilarShows similarEvents={event.similar} />
                  <Artists artists={event.artists} />
                </div>

                {/* Right component similar to sidebar */}
                <div className="about_event_right">
                  {/* Price range card */}
                  <Card
                    styles={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* Card content */}
                    <CardContent>
                      <CardHeader title="Price Range" subtitle={event.price} />
                    </CardContent>

                    {/* Card action */}
                    <CardActions>
                      <button>Tickets</button>
                    </CardActions>
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

                      <UsefulInfo usefulInfo={event.usefulInfo} />
                    </CardContent>

                    {/* Card Action */}
                    <CardActions>
                      <SocialInfo socialLinks={event.socials} />
                    </CardActions>
                  </Card>
                </div>
              </React.Fragment>
            ))}{" "}
          {type === "aboutArtist" &&
            eventDetails.map((artist) => (
              <React.Fragment key={`artist-${artist.id}-${artist.title}`}>
                {/* Left component */}
                <div className="about_event_left">
                  <div className="header">
                    <h2>About {artist.title}</h2>
                    <p>{artist.about1}</p>
                    {artist.about2 && <p>{artist.about2}</p>}
                    {artist.about3 && <p>{artist.about3}</p>}
                  </div>

                  <Tags tags={artist.tags} />
                </div>

                {/* Right component similar to sidebar */}
                <div className="about_event_right">
                  {/* Artist Profile card */}
                  <Card
                    styles={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* Card content */}
                    <CardContent>
                      <CardHeader title="Artist Profile" />
                      {artist.profile && (
                        <img
                          src={artist.profile}
                          alt={`${artist.title} profile`}
                          style={{
                            width: "100%",
                            maxWidth: "200px",
                            borderRadius: "8px",
                          }}
                        />
                      )}
                    </CardContent>

                    {/* Card action */}
                    <CardActions>
                      <button>View Events</button>
                    </CardActions>
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
              </React.Fragment>
            ))}{" "}
        </div>
      ) : (
        <div className="loading">
          {event === undefined || event === null ? (
            <h2>Loading event details...</h2>
          ) : (
            <h2>No event details available.</h2>
          )}
        </div>
      )}
    </>
  );
};

export default AboutPage;
