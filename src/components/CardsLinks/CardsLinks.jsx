import React, { useState } from "react";
import "./cardsLinks.scss";
import CardLink from "./CardLink/CardLink";
import { useLinks } from "../context/LinksContext";

const CardsLinks = () => {
  const { isLoading, links, setLinks } = useLinks();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (index) => {
    setCopiedIndex(index);
  };

  return (
    <div className="cards__links">
      {links.map((link, index) => {
        return (
          <CardLink
            link={link}
            key={index}
            index={index}
            isCopied={copiedIndex === index}
            onCopy={() => handleCopy(index)}
          />
        );
      })}
    </div>
  );
};
export default CardsLinks;
