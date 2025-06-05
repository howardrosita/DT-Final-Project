import React from "react";

export const Tags = ({ tags, type }) => {
  const normalizedTags = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
      ? tags.match(/[A-Z]?[a-z]+/g)
      : [];
  return (
    <div>
      <div className="tags" style={{ marginTop: type === "artist" ? "24px" : "" }}>
        {normalizedTags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
