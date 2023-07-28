import { useContext } from "react";
import { AppContext } from "../../context";

export default function OrderInNotification() {
  const { notificationOrder } = useContext(AppContext);

  const list = notificationOrder.map((item) => {
    return (
      <ul>
        <li className="flex justify-between items-center px-5 py-2 my-2">
          <h3 className="font-semibold text-xl ">{item.customer}</h3>
          <p className="text-lighter-text capitalize">{item.menu}</p>
          <p className="text-lighter-text pr-20">{item.totalPayment}</p>
          {item.status === true ?  <p className="capitalize px-3 py-1 text-[#50D1AA] bg-[#6be2be72] w-40 h-8 flex justify-center items-center rounded-[30px] mr-10">completed</p> : <p className="capitalize text-[#FFB572] bg-[#eb956aab] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] mr-10">preparing</p>}
        </li>
      </ul>
    );
  });
  return <section>{list}</section>;
}
