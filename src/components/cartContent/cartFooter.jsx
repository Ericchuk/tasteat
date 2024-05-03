import { useContext } from 'react';
import {AppContext} from '../../context';




export default function CartFooter(){

    const {total, discountTotal,orderItems} = useContext(AppContext)



    return(
        <section>
            <footer className="drop-shadow-sm border-t border-line pt-4">
            <aside className="flex justify-between items-center">
                <p className="mb-3">Discount</p>
                {orderItems.length < 1 ?<b>$0.00</b> :
                <b className="">${(discountTotal).toFixed(2)}</b>}
            </aside>
            <aside className="flex justify-between items-center">
                <p className="mb-3">Subtotal</p>
               {orderItems.length < 1 ? <b>$0.00</b> :
                <b className="">${(total * discountTotal).toFixed(2)}</b>}
            </aside>
        </footer>
        </section>
        
    )
}