import { useDispatch } from "react-redux";

function CartItem({ item, index }: any) {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch({ type: "UPDATE_CART", payload: { id: item.id, quantity: item.quantity } });
  };

  const handleDelete = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      dispatch({ type: "DELETE_CART", payload: item });
      alert("Delete cart successfully");
    }
  };

  return (
    <tr className="border-b">
       <td className="p-2">{index}</td> 
      <td className="p-2">{item.name}</td>
      <td className="p-2">{item.price} USD</td>
      <td className="p-2">
        <input
          id={`qty-${item.id}`}
          type="number"
          value={item.quantity}
          className="border w-16 text-center"
        />
      </td>
      <td className="p-2 space-x-2">
        <button
          onClick={handleUpdate}
          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Update
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
