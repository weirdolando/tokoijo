import React from "react";
import { useMatch, useLocation, Link, useNavigate } from "react-router-dom";
import { RiShoppingCartFill } from "react-icons/ri";
import { BsArrowLeftShort, BsFillPersonFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../reducers/usersSlice";

function Navbar({ onFilter }) {
  const currPath = useLocation().pathname;
  const matchRoot = useMatch("/");
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currUserName = useSelector((state) => state.users.loggedUser.name);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const cartElements = cartItems.map((cartItem) => (
    <div key={cartItem.id} className="flex border-t py-2 gap-2 items-center">
      <img className="w-1/6" src={cartItem.img} alt={cartItem.productName} />
      <div className="w-4/6">
        <h3 className="truncate max-w-[100px] font-semibold">
          {cartItem.productName}
        </h3>
        <p>
          {cartItem.qty} {cartItem.qty > 1 ? "items" : "item"}
        </p>
      </div>
      <p className="font-semibold text-orange-600">
        {(cartItem.price * cartItem.qty).toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>
    </div>
  ));

  return matchRoot ? (
    <header className="px-4 py-2 shadow-md">
      <nav className="flex justify-between items-center gap-5">
        <Link to="/" className="font-logo text-green-500 text-2xl">
          tokoijo
        </Link>
        <div className="flex flex-grow items-center border-2 rounded-md px-2">
          <AiOutlineSearch />
          <input
            className="px-2 py-1 flex-grow outline-none caret-green-600"
            type="text"
            placeholder="Search in tokoijo"
            onChange={onFilter}
          />
        </div>
        <div className="relative group py-2 flex items-center ">
          <Link
            className="p-2 inline-block group-hover:bg-slate-300/70 rounded-md transition-colors relative"
            to="/cart"
          >
            <RiShoppingCartFill className="text-xl" />
            {cartItems.length > 0 && (
              <div className="absolute top-0 left-5 rounded-full bg-red-500 text-zinc-200 min-w-[1rem] py-2 px-1 h-4 text-[0.5rem] flex items-center justify-center">
                <span>
                  {cartItems.length > 99 ? "99+" : cartItems.length.toString()}
                </span>
              </div>
            )}
          </Link>
          <div className="hidden group-hover:block text-sm rounded py-2 px-4 shadow-md absolute -left-[270px] top-full bg-white border-2 w-[310px] max-h-64 overflow-auto">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Cart ({cartItems.length})</p>
              <Link to="/cart" className="font-semibold text-green-500">
                See cart
              </Link>
            </div>
            {cartElements}
          </div>
        </div>
        <Link
          className="p-2 inline-block hover:bg-slate-300/70 rounded-md transition-colors relative"
          to="/admin"
        >
          <BsFillPersonFill className="text-xl" />
        </Link>
        <div className="text-sm px-4 border-l-2 py-1 flex items-center gap-4">
          {currUserName ? (
            <>
              <button
                className="rounded-md text-green-600 py-1 px-4 border-green-600 border font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
              <span className="font-semibold text-green-500 max-w-[90px] truncate">
                Hi, {currUserName}!
              </span>
            </>
          ) : (
            <>
              <Link
                className="rounded-md text-green-600 py-1 px-4 border-green-600 border font-semibold"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="rounded-md text-zinc-200 py-1 px-4 bg-green-600 font-semibold"
                to="/register"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  ) : (
    <header className="p-4 shadow-md">
      <nav className="flex items-center gap-1">
        <Link to="/" className="font-logo text-green-500 text-2xl">
          <BsArrowLeftShort />
        </Link>
        <p className="font-semibold">
          {currPath[1].toUpperCase() + currPath.substring(2)}
        </p>
      </nav>
    </header>
  );
}

export default Navbar;
