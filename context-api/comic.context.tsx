import { createContext, ReactNode, useContext, useState } from "react";

export interface ComicContextType {
  triggerImageBanner: String;
  setTriggerImageBanner: Function;
}
interface ComicContextProps {
  children: ReactNode;
}
const ComicContext = createContext<ComicContextType | null>(null);

export const ComicContextProvider = ({ children }: ComicContextProps) => {
  const [triggerImageBanner, setTriggerImageBanner] = useState<String>("");
  const value = {
    triggerImageBanner,
    setTriggerImageBanner,
  };
  return (
    <ComicContext.Provider value={value}>{children}</ComicContext.Provider>
  );
};
export default function useComicContext() {
  return useContext(ComicContext) as ComicContextType;
}
