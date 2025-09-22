import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

function ShoppingCart() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default ShoppingCart;
