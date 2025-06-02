const Card = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}) => {
  return (
    <div className="card" style={styles}>
      {children}
    </div>
  );
};

export const CardHeader = ({
  title,
  subtitle,
  styles,
}: {
  title: string;
  subtitle?: string;
  styles?: React.CSSProperties;
}) => {
  return (
    <div className="card_header" style={styles}>
      <h2>{title}</h2>
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
};

export const CardContent = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}) => {
  return (
    <div className="card_content" style={styles}>
      {children}
    </div>
  );
};

export const CardActions = ({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: React.CSSProperties;
}) => {
  return (
    <div className="card_actions" style={styles}>
      {children}
    </div>
  );
};

export default Card;
