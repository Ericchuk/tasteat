import checked from "../../assets/sidebar icons/tick-icon.svg";


export default function PaymentMethod({card,verified, paymentMethod }) {

  return (
    <section className="border relative rounded-lg border-line w-28 h-16 py-2.5 px-3 flex justify-center items-center">
      <aside className="flex justify-center items-center flex-col">
        {verified === "true" ? <img src={checked} alt="verified badge" className="absolute top-1 right-3" /> : " "}
        <img src={card} alt="payment method" />
        <p>{paymentMethod}</p>
      </aside>
    </section>

  );
}
