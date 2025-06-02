import { Link } from "react-router-dom";
import ArtistCard from "./ArtistCard";

const Artists = ({ artists }) => {

  return (
    <div className="artists-section">
      <h2>Artists</h2>
      <div className="artist-list">
        {artists && artists.map(artist => {
          return (
            <Link key={artist.id} to={`/artist/${artist.id}`}><ArtistCard name={artist.name} profile={artist.profile} /></Link>
          )
        })}
      </div>
    </div>
  )
}

export default Artists