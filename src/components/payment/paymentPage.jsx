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
  const {confirmPayment,cancelPayment, payment} = useContext(AppContext)
  return (
    <section className={`bg-bg-color ${payment ? 'w-[955px]' : "w-[450px]"} flex`}>
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

      <aside className="py-7 border-b border-line mb-80">
        <PaymentValue
          label="Cardholder name"
          type="text"
          placeholder="Levi Ackerman"
        />
        <PaymentValue
          label="Card number"
          type="number"
          placeholder="2564 1421 0897 1244"
        />
        <main className="flex justify-between items-center w-12/12">
            <PaymentValue
          label="Expiration date"
          type="date"
          placeholder="02/2022" className="w-[172px]"
        />
        <PaymentValue label="CVV" type="password" placeholder="***" className=""/>
        </main>
        
      </aside>

     {payment ? " " : <CartFooterButton button1="Cancel" onClick1={cancelPayment} button2="Continue Payment" onClick2={confirmPayment} />}
      </section>
     { payment ? <section className='text-white bg-bg-color pt-[70px]'>
        <LocationPage />
        </section> : ""}
    </section>
  );
}
