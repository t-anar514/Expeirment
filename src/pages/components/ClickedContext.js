import { createContext, useState, useContext } from 'react';

const ClickedContext = createContext();

export const useClicked = () => useContext(ClickedContext);

export const ClickedProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ClickedContext.Provider value={{ isClicked, setIsClicked }}>
      {children}
    </ClickedContext.Provider>
  );
};
