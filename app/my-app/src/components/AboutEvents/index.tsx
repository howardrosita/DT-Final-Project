import "./styles.css";
import { useEffect, useState } from "react";
import { getEvents, TEventInfo } from "../../services/events.service";
import React from "react";
import Artists from "../Artists/Artists";
import Card, { CardActions, CardContent, CardHeader } from "./components/card";
import SimilarShows from "./components/SimilarShows";
import Tags from "./components/Tags";
import UsefulInfo from "./components/UsefulInfo";
import SocialInfo from "./components/SocialInfo";

const AboutEvent = () => {
  const [eventDetails, setEventDetails] = useState<TEventInfo[]>();

  useEffect(() => {
    // Simulating an API call to fetch event details
    const fetchEventDetails = async () => {
      // Replace with actual API call
      const data = await getEvents();
      setEventDetails(data);
    };

    fetchEventDetails();
  }, []);

  return (
    <>
      {eventDetails && eventDetails.length > 0 ? (
        <div className="about_event_container">
          {eventDetails.map((event) => (
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
          ))}
        </div>
      ) : (
        <div className="loading_container">
          <h2>Loading event details...</h2>
        </div>
      )}
    </>
  );
};

export default AboutEvent;
