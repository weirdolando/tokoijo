import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { addItem, minusItem, deleteItem } from "../cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const itemsElements = items.map((item) => (
    <div key={item.id} className="flex p-4 shadow-md rounded-md gap-4 text-md">
      <img className="w-2/6 md:w-1/6" src={item.img} alt={item.productName} />
      <div className="w-3/6 md:w-4/6 relative flex-grow">
        <h3 className="my-3 ">{item.productName}</h3>
        <p className="font-semibold">
          {item.price.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}
        </p>
        <div className="flex mt-2 items-center gap-4 text-lg md:absolute md:bottom-0 md:right-0">
          <button
            className="mr-1 md:mr-8 text-red-500"
            onClick={() => dispatch(deleteItem(item))}
          >
            <BsTrash />
          </button>
          <button
            disabled={item.qty <= 1}
            className={item.qty <= 1 ? "opacity-30" : ""}
            onClick={() => dispatch(minusItem(item))}
          >
            <AiOutlineMinusCircle />
          </button>
          <span>{item.qty}</span>
          <button
            className="text-green-600"
            onClick={() => dispatch(addItem(item))}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="max-w-[900px] mx-auto my-8 min-h-[85vh] px-4">
      <h2 className="font-bold text-4xl">Your Cart</h2>
      <div className="grid  items-start gap-4 md:grid-cols-[2fr_1fr]">
        <div>{itemsElements}</div>
        <div className="flex flex-col p-4 shadow-md">
          <h3 className="font-semibold">Order Summary</h3>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold my-4">
            <p>Total Price</p>
            <p>
              {totalPrice.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
          </div>
          <button className="bg-green-600 rounded-md p-2 text-zinc-200">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
