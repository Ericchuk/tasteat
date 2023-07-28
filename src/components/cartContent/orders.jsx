import noodles from "../../assets/landing page image/image 4 (3).png";
import pasta from "../../assets/landing page image/image 4.png";
import dumpling from "../../assets/landing page image/image 4 (1).png";
import spinach from "../../assets/landing page image/image 4 (2).png";
import instantNoodles from "../../assets/landing page image/image 4(1).png";
import bin from '../../assets/sidebar icons/bin.svg'
import {useContext} from 'react';
import {AppContext} from '../../context'

export default function Order() {
    const {orderItems, removeFromCart} = useContext(AppContext)

  const orderItem = orderItems.map((item) => {
    const total = item.orderQty * item.price 
    return (
      <aside key={item.id} className="flex justify-between items-center my-4">
        <div>
          <aside className="flex justify-between items-center w-11/12 mb-2">
            <img src={item.dishImage} alt={item.dishName} className="w-12 rounded-circle mr-2"/>
            <span className="w-8/12 block">
              <p className="w-11/12 truncate font-medium">{item.dishName}</p>
              <small className="text-lighter-text">${item.price}</small>
            </span>
            <p className="w-12 p-3.5 border border-line h-12 rounded-lg text-base flex justify-center items-center bg-bg-color font-medium">{item.orderQty}</p>
          </aside>
          <label htmlFor="order note" className="w-12/12">
            <input type="text" placeholder="Order Note..." className="w-11/12 h-12 p-3.5 outline-none rounded-lg text-white bg-bg-color my-2 border border-line text-base" />
          </label>
        </div>
        <aside className="flex justify-between items-center flex-col">
          <p className="font-medium pb-8">${total}</p>
          <span className="flex justify-center items-center w-12 h-12 border border-bg-icons rounded-lg" onClick={() => removeFromCart(item)}>
            <img src={bin} alt="bin" />
            {open}
          </span>
        </aside>
      </aside>
    );
  });

  return(
    orderItems.length < 1 ? <p className="text-lg text-center my-9 animate-pulse"><b>No order has been placed</b></p> : <section>{orderItem}</section>
  );
}
