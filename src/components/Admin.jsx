import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormAddProducts from "./FormAddProducts";
import { fetchProducts, deleteProduct } from "../productsSlice";
import { BsTrash } from "react-icons/bs";

function Admin() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productElements = products.map((product) => (
    <tr key={product.id}>
      <td className="border-2 px-2 py-4">{product.id}</td>
      <td className="border-2 px-2 py-4">{product.productName}</td>
      <td className="border-2 px-2 py-4">
        <img
          className="max-w-[150px]"
          src={product.img}
          alt={product.productName}
        />
      </td>
      <td className="border-2 px-2 py-4">{product.price}</td>
      <td className="border-2 px-2 py-4">
        <button onClick={() => dispatch(deleteProduct(product.id))}>
          <BsTrash className="text-red-500 text-2xl" />
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="w-4/5 mx-auto min-h-[85vh]">
      <p className="text-center text-xs my-2">
        *This is the only site where you have a free admin access, please star
        the repo :)
      </p>
      <FormAddProducts />
      <h2 className="font-bold text-2xl mt-12">Delete Products</h2>
      <table className="text-center my-4">
        <thead>
          <tr>
            <th className="border-2 px-2 py-4">ID</th>
            <th className="border-2 px-2 py-4">Product Name</th>
            <th className="border-2 px-2 py-4">Image</th>
            <th className="border-2 px-2 py-4">Price</th>
            <th className="border-2 px-2 py-4">Action</th>
          </tr>
        </thead>
        <tbody>{productElements}</tbody>
      </table>
    </div>
  );
}

export default Admin;
