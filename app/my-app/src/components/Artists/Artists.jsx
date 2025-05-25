import { useEffect, useState } from "react"
import { getEvents } from "../../services/events.service"
import ArtistCard from "./ArtistCard";

const Artists = () => {

  const [artistInfo, setArtistInfo] = useState([]);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setArtistInfo(data);
      })
  }, [])

  return (
    <div>
      <h2>Artists</h2>
      <div className="artist-list">
        {artistInfo.map(artist => {
          return (
            <ArtistCard key={artist.id} name={artist.name} profile={artist.profile} />
          )
        })}
      </div>
    </div>
  )
}

export default Artists