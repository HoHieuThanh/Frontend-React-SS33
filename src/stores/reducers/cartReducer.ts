import type { ProductTypes } from "../../data/data";
const savedCart = localStorage.getItem("cart");
const initialState: ProductTypes[] = savedCart ? JSON.parse(savedCart) : [];

export default function cartReducer(state = initialState, action: any) {
  let newState;
  switch (action.type) {
    case "ADD_TO_CART":
      { const exist = state.find((item) => item.id === action.payload.id);
      if (exist) {
        if (exist.quantity + 1 > action.payload.quantity) {
          alert("Số lượng sản phẩm vượt quá số lượng trong kho");
          return state;
        }
        newState = state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newState = [...state, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState; }

    case "DELETE_CART":
      newState = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}
