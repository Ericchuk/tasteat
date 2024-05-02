import { useContext } from "react";
import { AppContext } from "../../context";

export default function CartFooterButton({button1,onClick1, button2, disable2, onClick2}) {
  const { closeCart, orderItems } = useContext(AppContext);

  return (
    <main className="flex justify-around items-center mt-2">
      <button
        className="h-12 w-40 border p-3.5 flex justify-center items-center border-bg-icons rounded-lg text-bg-icons font-semibold text-sm"
        onClick={onClick1}
      >
        {button1}
      </button>
      <button
        className="h-12 w-44 border border-bg-icons p-3.5 flex justify-center items-center bg-bg-icons rounded-lg font-semibold text-sm text-white"
        disabled={disable2}
        onClick={onClick2}
      >
       {button2}
      </button>
    </main>
  );
}
