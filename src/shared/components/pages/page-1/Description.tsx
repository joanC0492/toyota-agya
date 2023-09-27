import { ItemList } from ".";

interface IProps {
  className?: string;
}
export const Description = ({ className = "" }: IProps) => {
  return (
    <div className={className}>
      <ul>
        <ItemList
          text="ahorro de combustible"
          className="ml-[54px]"
          dataAnimate="itemlist-1"
        />
        <ItemList
          text="conectividad y seguridad"
          className="-skew-x-[23deg] | [&>div]:skew-x-[23deg] | bg-toyota-orange | rounded-lg | ml-[5px] | px-[22px]"
          dataAnimate="itemlist-2"
        />
        <ItemList text="amplio interior" dataAnimate="itemlist-3" />
      </ul>
    </div>
  );
};
