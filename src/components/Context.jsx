import { useContext, createContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [categoryState, setCategoryState] = useState("Beef");
  const [allMeals, setAllMeals] = useState();

  const handleClick = (strCategory) => {
    setCategoryState(strCategory);
  };

  return (
    <AppContext.Provider
      value={{
        categoryState,
        setCategoryState,
        handleClick,
        allMeals,
        setAllMeals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
