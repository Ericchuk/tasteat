import { useContext } from 'react';
import {AppContext} from '../../context';
import Order from './orders';
import CartFooter from './cartFooter'
import CartFooterButton from './cartFooterButton';
import ConfirmationPage from './payment/confirmation'
import PaymentPage from './payment/paymentPage';
import LocationPage from './location/locationPage'
import '../../styles/cart.css'

export default function CartContent() {

  const {closeCart, orderItems, } = useContext(AppContext)
  return (
    <section className=" div relative w-6/12 p-6 bg-sidebar text-white">
      <h2 className="text-white text-lg mb-5 font-semibold">Orders #34562</h2>
      <span className="bg-bg-icons text-white rounded-lg py-3 px-2.5">Delivery</span>

      <div className="flex justify-between items-center border my-10 pb-4 border-t-0 border-l-0 border-r-0 border-line">
        <aside className="flex justify-between items-center w-9/12">
          <p  className="font-semibold">Item</p>
          <p  className="font-semibold">Qty</p>
        </aside>
        <p  className="font-semibold">Price</p>
      </div>
      <Order />
      <CartFooter />
      <CartFooterButton button1="Go back" button2="Continue to Payment" onClick1={closeCart} disbable2={orderItems.length === 0} />
      <ConfirmationPage />
      <PaymentPage />
      <LocationPage />
    </section>
  );
}
