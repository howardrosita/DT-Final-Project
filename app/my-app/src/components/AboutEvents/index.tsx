import "./styles.css";
import { useEffect, useState } from "react";
import { getEvents, TEventInfo } from "../../services/events.service";

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
            <>
              {/* Left component */}
              <div
                key={`event-left-${event.title}`}
                className="about_event_left"
              >
                <div className="header">
                  <h2>About the event</h2>
                  <p>{event.description}</p>
                </div>

                <div className="tags">
                  <h3>Vibe</h3>
                  {/* Tags button */}
                  <div className="tag_buttons">
                    {event.tags.map((tag, index) => (
                      <button key={index} className="tag_btn">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="similar_shows">
                  <h3>Similar to these Netflix Shows</h3>
                  <ul className="shows_list_items">
                    {event.similar.map((show, index) => (
                      <li key={index} className="show_item">
                        {show}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right component similar to sidebar */}
              <div
                key={`event-right-${event.title}`}
                className="about_event_right"
              >
                {/* Price range card */}
                <div
                  className="card"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {/* Card content */}
                  <div className="card_content">
                    <h2>Price Range</h2>
                    <span>{event.price}</span>
                  </div>

                  {/* Card action */}
                  <div className="card_actions">
                    <button>Tickets</button>
                  </div>
                </div>

                {/* Useful info card */}
                <div
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  {/* Header card */}
                  <div className="card_header">
                    <h2>Useful Info</h2>
                  </div>
                  <span className="separator" />

                  {/* Card Content */}
                  <div className="card_content">
                    <ul className="useful_info_list">
                      {event.usefulInfo.map((info, index) => (
                        <li key={index} className="list_item">
                          <img
                            src={info.icon}
                            alt={info.title}
                            aria-label={info.title}
                            title={info.title}
                            className="svg_icon_img"
                          />

                          <a
                            href={info.title}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.title}
                          </a>
                          <span className="separator" />
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Action */}
                  <div className="card_actions">
                    {event.socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social_btn"
                      >
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="svg_icon_img"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </>
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
