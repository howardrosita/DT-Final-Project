import ArtistCard from "./ArtistCard";

const Artists = ({ artists }) => {

  return (
    <div>
      <h2>Artists</h2>
      <div className="artist-list">
        {artists.map(artist => {
          return (
            <ArtistCard key={artist.id} name={artist.name} profile={artist.profile} />
          )
        })}
      </div>
    </div>
  )
}

export default Artists