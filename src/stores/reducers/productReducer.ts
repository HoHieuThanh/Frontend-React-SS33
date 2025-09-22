
import { products, type ProductTypes } from "../../data/data";

const savedProducts = localStorage.getItem("products");
const initialState = savedProducts ? JSON.parse(savedProducts) : products;

export default function productReducer(state = initialState, action: any) {
  let newState;
  switch (action.type) {
    case "ADD_TO_CART":
  if (state.find((p: ProductTypes) => p.id === action.payload.id)?.quantity === 0) {
    alert("Sản phẩm đã hết hàng!");
    return state;
  }
  newState = state.map((p: ProductTypes) =>
    p.id === action.payload.id ? { ...p, quantity: p.quantity - 1 } : p
  );
  localStorage.setItem("products", JSON.stringify(newState));
  return newState;


    case "DELETE_CART":
      // trả lại hàng vào kho khi xóa
      newState = state.map((p: ProductTypes) =>
        p.id === action.payload.id
          ? { ...p, quantity: p.quantity + action.payload.quantity }
          : p
      );
      localStorage.setItem("products", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
}
