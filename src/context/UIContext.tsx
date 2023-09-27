import { createContext, useContext, useReducer } from "react";
import { UIReducer } from "./UIReducer";
import { TypeModal } from "@/interfaces";

interface IProps {
  children: React.ReactNode;
}
interface ContextProps {
  showModal: boolean;
  typeModal?: TypeModal;
  // methods
  openModal: (typeModal: TypeModal) => void;
  closeModal: () => void;
}

export interface UIState {
  showModal: boolean;
  // typeModal: TypeModal;
  typeModal?: TypeModal;
}
const UI_INITIAL_STATE: UIState = {
  showModal: false,
  typeModal: undefined,
};

const UIContext = createContext({} as ContextProps);

const UIProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const closeModal = () => {
    dispatch({
      type: "UI - Close Modal",
      payload: {
        modal: false,
      },
    });
  };

  const openModal = (typeModal: TypeModal) => {
    dispatch({
      type: "UI - Open Modal",
      payload: {
        modal: true,
        typemodal: typeModal,
      },
    });
  };

  return (
    <UIContext.Provider
      value={{
        // showModal: state.showModal,
        ...state,
        openModal,
        closeModal,
      }}>
      {children}
    </UIContext.Provider>
  );
};

const useUIContext = () => {
  return useContext(UIContext);
};

export { UIProvider, useUIContext };
