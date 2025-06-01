const SocialInfo = ({
  socialLinks,
  styles,
}: {
  socialLinks: { name: string; icon: string }[];
  styles?: React.CSSProperties;
}) => {
  return (
    <>
      {socialLinks.length > 0 &&
        socialLinks.map((link, index) => (
          <SocialInfoItem
            key={`social-link-${index}`}
            link={link}
            styles={styles}
          />
        ))}
    </>
  );
};

const SocialInfoItem = ({
  link,
  styles,
}: {
  link: { name: string; icon: string };
  styles?: React.CSSProperties;
}) => {
  return (
    <a
      href={link.name.startsWith("http") ? link.name : `https://${link.name}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.name}
      className="social_btn"
      style={styles}
    >
      <img
        src={link.icon}
        alt={link.name}
        aria-label={link.name}
        title={link.name}
        className="svg_icon_img"
      />
    </a>
  );
};

export default SocialInfo;
