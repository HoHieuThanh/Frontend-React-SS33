import { useDispatch } from "react-redux";

function ProductItem({ product }: any) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (product.quantity > 0) {
      dispatch({ 
        type: "ADD_TO_CART",
         payload: { ...product, stock: product.quantity }
    });
    } else {
      alert("Hết hàng!");
    }
  };

  return (
    <div className="flex gap-4 p-4 border-b">
      <img
        src={product.image}
        alt={product.name}
        className="w-28 h-24 object-cover"
      />
      <div className="flex-1">
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-sm text-gray-600">{product.describe}</p>
      </div>
      <div className="flex flex-col justify-between items-center mt-2">
        <p className="text-black border border-black w-16 px-3 py-1 rounded text-sm font-bold">
          {product.quantity}
        </p>
        <button
          onClick={handleAdd}
          className="bg-orange-500 text-white px-3 py-2 rounded text-sm font-bold"
        >
          {product.price} USD
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
