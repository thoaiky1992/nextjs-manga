import { ComicContextProvider } from "@/context-api/comic.context";
import { ComponentType } from "react";

export const WithComicContext = <P extends object>(
  Component: ComponentType<P>
): React.FC<P> => {
  const ComponentWithComicContext = (props: P) => {
    return (
      <ComicContextProvider>
        <Component {...(props as P)} />
      </ComicContextProvider>
    );
  };
  return ComponentWithComicContext;
};
