import { createContext } from "react";
import { Logo, Title, Description } from "./";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

interface Page1ContextProps {}

const Page1Context = createContext({} as Page1ContextProps);
const { Provider } = Page1Context;

export const Page1 = ({ children, className }: IProps) => {
  return (
    <div className={className}>
      <Provider value={{}}>{children}</Provider>
    </div>
  );
};

Page1.Logo = Logo;
Page1.Title = Title;
Page1.Description = Description;
