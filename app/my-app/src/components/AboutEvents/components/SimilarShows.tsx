const SimilarShows = ({ similarEvents }: { similarEvents: string[] }) => {
  return (
    <div className="similar_shows">
      <h3>Similar Shows</h3>
      <ul className="similar_shows_list">
        {similarEvents.map((event, index) => (
          <SimilarShowsItem key={index} event={event} />
        ))}
      </ul>
    </div>
  );
};

const SimilarShowsItem = ({
  event,
  styles,
}: {
  event: string;
  styles?: React.CSSProperties;
}) => {
  return (
    <li className="show_item" style={styles}>
      {event}
    </li>
  );
};

export default SimilarShows;
