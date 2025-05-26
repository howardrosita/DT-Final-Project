const ArtistCard = ({ name, profile }) => {
  return (
    <div className="artist-container">
      <img src={profile} alt={name} />
      <p>{name}</p>
    </div>
  )
}

export default ArtistCard;