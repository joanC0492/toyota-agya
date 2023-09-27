import { TypeModal } from "@/interfaces";
import { UIState } from "./UIContext";

type typeAction =
  | {
      type: "UI - Open Modal";
      payload: { modal: boolean; typemodal: TypeModal };
    }
  | { type: "UI - Close Modal"; payload: { modal: boolean } };

export const UIReducer: React.Reducer<UIState, typeAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "UI - Open Modal":
      console.log("Open Modal");
      return {
        ...state,
        showModal: action.payload.modal,
        typeModal: action.payload.typemodal,
      };
    case "UI - Close Modal":
      console.log("Close Modal");
      return {
        ...state,
        showModal: action.payload.modal,
      };
    default:
      return state;
  }
};
