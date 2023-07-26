import cart from "../assets/sidebar icons/cart.svg";
import CartContent from "./cartContent/content";
import { useState } from "react";

export default function Cart() {
  const [openCart, setOpenCart] = useState(false);

  function closeCart(){
    setOpenCart(!openCart)
  }

  return (
    <>
      {openCart ? (
        <CartContent />
      ) : (
        <div className="h-screen w-20 flex justify-center items-start py-5 bg-sidebar" onClick={closeCart}>
          <li className="h-12 w-12 bg-bg-icons flex items-center justify-center rounded-lg">
            <img src={cart} alt="cart" className="h-5" />
          </li>
        </div>
      )}
    </>
  );
}
