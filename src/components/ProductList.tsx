import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import type { ProductTypes } from "../data/data";

function ProductList() {
  const products = useSelector((state: any) => state.product);

  return (
    <div className="w-1/2 border rounded shadow">
      <h3 className="bg-blue-600 text-white px-4 py-2 font-bold">List Products</h3>
      {products.map((p: ProductTypes) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
