const UsefulInfo = ({
  usefulInfo,
  styles,
}: {
  usefulInfo: { icon: string; title: string }[];
  styles?: React.CSSProperties;
}) => {
  return (
    <ul className="useful_info_list" style={styles}>
      {usefulInfo.map((info, index) => (
        <UsefulInfoItem key={`useful-info-${index}`} info={info} />
      ))}
    </ul>
  );
};

const UsefulInfoItem = ({
  info,
  styles,
}: {
  info: { icon: string; title: string };
  styles?: React.CSSProperties;
}) => {
  return (
    <>
      <li className="list_item" style={styles}>
        <img
          src={info.icon}
          alt={info.title}
          aria-label={info.title}
          title={info.title}
          className="svg_icon_img"
        />
        <a href={info.title} target="_blank" rel="noopener noreferrer">
          {info.title}
        </a>
      </li>
      <span className="separator" />
    </>
  );
};

export default UsefulInfo;
