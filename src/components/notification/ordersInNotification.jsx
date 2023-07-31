import { useContext } from "react";
import { AppContext } from "../../context";

export default function OrderInNotification() {
  const { notificationOrder,removeCart } = useContext(AppContext);

  const list = notificationOrder.map((item) => {
    return (
      <ul>
        <li className="flex justify-between items-center px-5 py-2 my-2">
          {removeCart ? <div className="flex justify-start items-center w-[142px]">
            <img src={item.customerImage} alt={item.customerName} className="mr-4" />
            <p className="text-sm text-lighter-text font-normal">{item.customerName}</p>
          </div> : <h3 className="font-semibold text-xl ">{item.customer}</h3>}
          <p className={`text-lighter-text capitalize text-sm ${removeCart ? "w-[137px]" : "w-auto"}`}>{item.menu}</p>
          <p className="text-lighter-text text-sm pr-20">${`${removeCart ? item.totalPurchasePaid : item.totalPayment}`}</p>
          {item.status === true && item.out === "true" ?  <p className={`capitalize px-3 py-1 text-[#50D1AA] bg-[#6be2be72] w-40 h-8 flex justify-center items-center rounded-[30px]  ${removeCart ?"mr-0" : 'mr-10' }`}>completed</p> : item.status === true && item.out === "false" ? <p className={`capitalize text-[#FFB572] bg-[#eb956aab] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>preparing</p> : <p className={`capitalize text-[#9290FE] bg-[#9290fe71] px-3 py-1 w-40 h-8 flex justify-center items-center rounded-[30px] ${removeCart ?"mr-0" : 'mr-10' }`}>Pending</p>}
        </li>
      </ul>
    );
  });
  return <section>{list}</section>;
}
