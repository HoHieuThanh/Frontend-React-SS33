import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import type { ProductTypes } from "../data/data";

function Cart() {
  const cart = useSelector((state: any) => state.cart);

  const total = cart.reduce(
    (sum: number, item: ProductTypes) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="w-1/2 border rounded shadow ml-4">
      <h3 className="bg-red-200 text-red-800 px-4 py-2 font-bold">Your Cart</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">STT</th>
            <th className="p-2">Name</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center p-4 text-gray-600">
                Empty product in your cart
              </td>
            </tr>
          ) : (
            cart.map((c: ProductTypes, index: number) => (
              <CartItem key={c.id} item={{ ...c}} index={index + 1} />
            ))
          )}
        </tbody>
      </table>
      <div className="p-4">
        <p className="text-sm">
          There are {cart.length} items in your shopping cart.
        </p>
        <p className="text-red-600 font-bold text-lg">{total} USD</p>
      </div>
      {cart.length > 0 && (
        <div className="bg-green-100 text-green-700 p-2 m-4 rounded">
          Add to cart successfully
        </div>
      )}
    </div>
  );
}

export default Cart;
