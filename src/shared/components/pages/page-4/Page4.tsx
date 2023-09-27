import { createContext } from "react";
import { CardTop1, CardTop2 } from "./Cards";
import { ListCardsBottom, Title } from ".";

interface IProps {
  className?: string;
  children: React.ReactNode;
}
interface Page4ContextProps {}

const Page4Context = createContext({} as Page4ContextProps);
const { Provider } = Page4Context;

export const Page4 = ({ children, className = "" }: IProps) => {
  return (
    <div className={className}>
      <Provider value={{}}>{children}</Provider>
    </div>
  );
};

Page4.Title = Title;
Page4.CardTop1 = CardTop1;
Page4.CardTop2 = CardTop2;
Page4.ListCardsBottom = ListCardsBottom;