import Header from "./paymentHeader";
import PaymentMethod from "./paymentMethod";
import PaymentValue from "./paymentValue";
import CartFooterButton from "../cartContent/cartFooterButton";
import card3 from "../../assets/sidebar icons/Card.svg";
import paypal from "../../assets/sidebar icons/paypal.svg";
import cash from "../../assets/sidebar icons/card2.svg";
import { useContext } from "react";
import { AppContext } from "../../context";
import LocationPage from "../location/locationPage";

export default function PaymentPage() {
  const {cardName, cardNumber,expiryDate,cvv,    cardNumberFunc,
    cvvFunc,
    expiryFunc, payment, cardNameFunc} = useContext(AppContext)
  return (
    <section className={`bg-bg-color  h-[123vh] w-[450px] flex`}>
      <section className="w-[480px] border-r border-line px-6 pt-[70px]">
        <Header headText="Payment" headerDescription="3 payment method available" />
      <h3 className="semibold text-white text-xl my-4">Payment Method</h3>
      <aside className="flex justify-start items-center gap-x-2">
        <PaymentMethod
          card={card3}
          verified="true"
          paymentMethod="Credit card"
        />
        <PaymentMethod card={paypal} verified="false" paymentMethod="Paypal" />
        <PaymentMethod card={cash} verified="false" paymentMethod="Cash" />
      </aside>

      <aside className="py-7 border-b border-line mb-20">
         <aside className="flex justify-start items-start flex-col">
            <label className="text-base text-white my-2 capitalize">Cardholder name</label>
            <input type="text" placeholder="Levi Ackerman" value={cardName} onChange={cardNameFunc} className="h-12 w-full rounded-lg p-3.5 flex justify-center items-center outline-none bg-bg-color my-2 border border-line text-base" />
        </aside>
        <aside className="flex justify-start items-start flex-col">
            <label className="text-base text-white my-2 capitalize">Card number</label>
            <input type="number" placeholder="2564 1421 0897 1244" value={cardNumber} onChange={cardNumberFunc} className="h-12 w-full rounded-lg p-3.5 flex justify-center items-center outline-none bg-bg-color my-2 border border-line text-base" />
        </aside>
        
        <main className="flex justify-between items-center w-12/12">
        <aside className="flex justify-start items-start flex-col">
            <label className="text-base text-white my-2 capitalize">Expiration date</label>
            <input type="date" placeholder="02/22" value={expiryDate} onChange={expiryFunc} className="h-12 w-full rounded-lg p-3.5 flex justify-center items-center outline-none bg-bg-color my-2 border border-line text-base" />
        </aside>
        <aside className="flex justify-start items-start flex-col">
            <label className="text-base text-white my-2 capitalize">CVV</label>
            <input type="password" placeholder="***" value={cvv} onChange={cvvFunc} className="h-12 w-full rounded-lg p-3.5 flex justify-center items-center outline-none bg-bg-color my-2 border border-line text-base" />
        </aside>
        </main>
        
      </aside>

      </section>
     { payment ? <section className='text-white bg-bg-color pt-[70px]'>
        </section> : ""}
    </section>
  );
}
