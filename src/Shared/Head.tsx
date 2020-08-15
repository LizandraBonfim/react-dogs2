import React, { useEffect } from "react";

interface Parameters {
  title: string;
  description: string;
}

const Head: React.FC<Parameters> = ({ title, description, ...rest }) => {
  useEffect(() => {
    document.title = (title || "") + " | Dogs";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", description || "");
  }, [title, description]);

  return null;
};

export default Head;
