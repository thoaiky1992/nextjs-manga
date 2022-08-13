import { createContext, ReactNode, useContext, useState } from "react";

export interface ComicContextType {
  flag: boolean;
  setFlag: Function;
}
interface ComicContextProps {
  children: ReactNode;
}
const ComicContext = createContext<ComicContextType | null>(null);

export const ComicContextProvider = ({ children }: ComicContextProps) => {
  const [flag, setFlag] = useState<boolean>(false);
  const value = {
    flag,
    setFlag,
  };
  return (
    <ComicContext.Provider value={value}>{children}</ComicContext.Provider>
  );
};
export default function useComicContext() {
  return useContext(ComicContext) as ComicContextType;
}
