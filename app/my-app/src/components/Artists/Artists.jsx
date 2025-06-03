import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Artists = ({ artists }) => {

  return (
    <div className="artists-section">
      <h2 style={{ marginBottom: "1rem" }}>Artists</h2>
      <Splide
        options={{
          arrows: false,
          autoWidth: true,
          gap: "21px",
          pagination: false
        }}
      >
        {artists && artists.map(artist => {
          return (
            <SplideSlide key={artist.id}>
              <Link to={`/artist/${artist.id}`}><ArtistCard name={artist.name} profile={artist.profile} /></Link>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
  )
}

export default Artists