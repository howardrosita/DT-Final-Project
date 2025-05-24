import React from "react";

export const eventTags = ({ tags }) => {
  const normalizedTags = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
    ? tags.match(/[A-Z]?[a-z]+/g)
    : [];
  return (
    <div>
      <div className="tags">
        {normalizedTags.map((tag, index) => (
          <span className="tag" key={index}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
