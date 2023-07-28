import Header from "./paymentHeader";
import PaymentMethod from "./paymentMethod";
import PaymentValue from "./paymentValue";
import CartFooterButton from "../cartFooterButton";
import card3 from "../../../assets/sidebar icons/Card.svg";

import paypal from "../../../assets/sidebar icons/paypal.svg";
import cash from "../../../assets/sidebar icons/Card2.svg";

export default function PaymentPage() {
  return (
    <section className="">
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

      <aside className="py-7 border-b border-line">
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

      <CartFooterButton button1="Cancel" button2="Continue Payment" />
    </section>
  );
}
