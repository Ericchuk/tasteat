import { useContext } from "react";
import { AppContext } from "../../context";

export default function PaymentValue({label, type, placeholder, value, onChange}){
    const {paymentInputs} =  useContext(AppContext);
    
    return(
        <aside className="flex justify-start items-start flex-col">
            <label className="text-base text-white my-2 capitalize">{label}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="h-12 w-full rounded-lg p-3.5 flex justify-center items-center outline-none bg-bg-color my-2 border border-line text-base" />
        </aside>
    )
}