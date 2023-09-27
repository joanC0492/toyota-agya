import { CardBottom } from "./Cards";
import { cardsData } from "@/data/app-data";
interface IProps {
  className?: string;
}
export const ListCardsBottom = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <div className="flex | gap-x-8 | page-04-card-title | [&_.card-1]:animation-delay-500 | [&_.card-2]:animation-delay-1000 | [&_.card-3]:animation-delay-1500 | [&_.card-4]:animation-delay-2000">
        {cardsData.map((card, i) => (
          <CardBottom
            {...card}
            key={i}
            className={`scale-block | card-${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
