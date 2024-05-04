import { useContext } from "react";
import { AppContext } from "../../context";


export default function LocationManual(){
    const {deliveryAddress,deliverAddFunc,deliveryNoteFunc,deliveryNote, } = useContext(AppContext)
    return(
        <section className="py-4">
            <h3 className="text-base text-white mb-3">Manually entered address</h3>
            <p className=" text-lighter-text mt-4">Please note that we only offer delivery within a 4-mile radius of our <a href="#" className="text-bg-icons">restaurant location.</a> </p>
            <aside className="flex justify-start items-start flex-col">
                <input type="text" placeholder="1234 Cherry Blossom Lane Springfield, USA 12345" className="w-full rounded-lg p-3.5 h-16 bg-bg-color my-3 border-line border" value={deliveryAddress} onChange={deliverAddFunc}/>
                <label className="my-3">Delivery Note</label>
                <input type="text" placeholder="Knock the door 3 times" className="bg-bg-color h-12 rounded-lg w-full p-3.5 border-line border" value={deliveryNote} onChange={deliveryNoteFunc} />
            </aside>
        </section>
    )
}