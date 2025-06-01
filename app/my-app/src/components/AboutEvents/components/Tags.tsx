const Tags = ({
  tags,
  styles,
}: {
  tags: string[];
  styles?: React.CSSProperties;
}) => {
  return (
    <div className="tags" style={styles}>
      <h3>Vibe</h3>
      <div className="tag_buttons">
        {tags.map((tag, index) => (
          <TagItem key={index} tag={tag} />
        ))}
      </div>
    </div>
  );
};

const TagItem = ({
  tag,
  styles,
}: {
  tag: string;
  styles?: React.CSSProperties;
}) => {
  return (
    <button className="tag_btn" style={styles}>
      {tag}
    </button>
  );
};

export default Tags;
