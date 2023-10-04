import { useUIContext } from "@/context/UIContext";
import { IconModal } from "@/shared/components/ui";

interface IProps {
  className?: string;
}
export const Modal360 = ({ className }: IProps) => {
  const { showModal, closeModal } = useUIContext();
  return (
    <div className={`${className} | relative | w-[871px] | h-[544px]`}>
      {showModal && (
        <div className="relative | w-full | h-full">
          <iframe
            src="https://www.toyotaperu.com.pe/sites/all/themes/toyota/360/load.php?u=agya-interior-360.jpg"
            frameBorder={0}
            className="w-full | h-full"
          />
          <IconModal
            className="rotate-45 | absolute | -top-4 | right-4"
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};
