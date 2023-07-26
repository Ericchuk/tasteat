import Order from './orders';
import CartFooter from './cartFooter'

export default function CartContent() {
  return (
    <section className="w-4/12 p-6">
      <h2>Orders #34562</h2>
      <span>Delivery</span>

      <div>
        <aside>
          <p>Item</p>
          <p>Qty</p>
        </aside>
        <p>Price</p>
      </div>
      <Order />
      <CartFooter />
    </section>
  );
}
