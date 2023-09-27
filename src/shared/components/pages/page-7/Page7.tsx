import { createContext } from "react";
import { Buttons, Footer, Title } from ".";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

interface Page7ContextProps {}

const Page7Context = createContext({} as Page7ContextProps);
const { Provider } = Page7Context;

export const Page7 = ({ children, className = "" }: IProps) => {
  return (
    <div className={className}>
      <Provider value={{}}>{children}</Provider>
    </div>
  );
};

Page7.Title = Title;
Page7.Buttons = Buttons;
Page7.Footer = Footer;