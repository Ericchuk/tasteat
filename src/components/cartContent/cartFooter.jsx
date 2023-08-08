import { useContext } from 'react';
import {AppContext} from '../../context';




export default function CartFooter(){

    const {total, discountTotal} = useContext(AppContext)



    return(
        <section>
            <footer className="drop-shadow-sm border-t border-line pt-4">
            <aside className="flex justify-between items-center">
                <p className="mb-3">Discount</p>
                <b className="">${discountTotal}</b>
                {console.log(discountTotal)}
            </aside>
            <aside className="flex justify-between items-center">
                <p className="mb-3">Subtotal</p>
                <b className="">${total}</b>
                {console.log(total)}
            </aside>
        </footer>
        </section>
        
    )
}