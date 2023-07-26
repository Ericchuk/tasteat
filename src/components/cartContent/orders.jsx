import noodles from "../../assets/landing page image/image 4 (3).png";
import pasta from "../../assets/landing page image/image 4.png";
import dumpling from "../../assets/landing page image/image 4 (1).png";
import spinach from "../../assets/landing page image/image 4 (2).png";
import instantNoodles from "../../assets/landing page image/image 4(1).png";
import bin from '../../assets/sidebar icons/bin.svg'

export default function Order() {
  const orderItems = [
    {
      id: 0,
      itemName: "Spicy seasoned seafood noodles",
      itemImage: noodles,
      orderQty: 2,
      price: 2.29,
    },
  ];

  const orderItem = orderItems.map((item) => {
    return (
      <aside key={item.id}>
        <div>
          <aside>
            <img src={item.itemImage} />
            <span>
              <p>{item.itemName}</p>
              <small>${item.price}</small>
            </span>
            <p>{item.quantity}</p>
          </aside>
          <label htmlFor="order note">
            <input type="text" placeolder="Order Note..." />
          </label>
        </div>
        <aside>
          <p>${item.quantity * item.price}</p>
          <span>
            <img src={bin} alt="bin" />
          </span>
        </aside>
      </aside>
    );
  });

  return <section>{orderItem}</section>;
}
