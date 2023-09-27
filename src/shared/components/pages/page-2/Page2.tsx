import { createContext } from "react";
import { Box1, Box2, Box3, Box4, Box5 } from "./";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

interface Page2ContextProps {}

const Page2Context = createContext({} as Page2ContextProps);
const { Provider } = Page2Context;

export const Page2 = ({ children, className }: IProps) => {
  return (
    <div className={className}>
      <Provider value={{}}>{children}</Provider>
    </div>
  );
};

Page2.Box1 = Box1;
Page2.Box2 = Box2;
Page2.Box3 = Box3;
Page2.Box4 = Box4;
Page2.Box5 = Box5;
