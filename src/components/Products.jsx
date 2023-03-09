import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../productsSlice";
import { BsFillCartPlusFill } from "react-icons/bs";
import { addItem } from "../cartSlice";

function Products({ filter }) {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = (id) => {
    const addedProduct = products.find((product) => product.id === id);
    dispatch(addItem(addedProduct));
  };

  const productsElements = products
    .filter((product) =>
      product.productName.toLowerCase().includes(filter.toLowerCase())
    )
    .map((product) => (
      <div key={product.id} className="p-4 shadow-md rounded-md">
        <img src={product.img} alt={product.productName} />
        <h3 className="font-semibold my-3">{product.productName}</h3>
        <p>
          {product.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <button
          title="Add to cart"
          className="block ml-auto mt-2 text-blue-500 p-2 hover:bg-slate-300/70 rounded-md transition-colors"
          onClick={() => handleAdd(product.id)}
        >
          <BsFillCartPlusFill className="text-xl" />
        </button>
      </div>
    ));

  return (
    <div className="max-w-[900px] mx-auto my-8 min-h-[83vh] px-4">
      <h2 className="font-bold text-4xl">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-4">
        {productsElements}
      </div>
    </div>
  );
}

export default Products;
