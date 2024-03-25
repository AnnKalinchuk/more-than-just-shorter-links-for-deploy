import React, { createContext, useContext, useEffect, useState } from "react";

const LinksContext = createContext();

const LinksProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedLinks = JSON.parse(localStorage.getItem("links"));
    if (storedLinks) {
      setLinks(storedLinks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
  }, [links]);

  return (
    <LinksContext.Provider value={{ isLoading, setIsLoading, links, setLinks }}>
      {children}
    </LinksContext.Provider>
  );
};

export default LinksProvider;

export const useLinks = () => {
  return useContext(LinksContext);
};
