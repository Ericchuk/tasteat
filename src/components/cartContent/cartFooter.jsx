import { useContext } from 'react';
import {AppContext} from '../../context';

export default function CartFooter(){

    const {closeCart, orderItems} = useContext(AppContext)

    const lists = [
        {
            id:0,
            title:'Discount',
        },
        {
            id:1,
            title:'Subtotal',
        },
    ]

    const list = lists.map((item) => {
        return(
            <aside key={item.id} className="flex justify-between items-center">
                <p className="mb-3">{item.title}</p>
                <b className="">$2.23</b>
            </aside>
        )
    })

    function check(){
        console.log("wwwww")
    }
    return(
        <section>
            <footer className="drop-shadow-sm border-t border-line pt-4">
            {list}
            <main className="flex justify-around items-center mt-5">
                <button className="h-12 w-40 border p-3.5 flex justify-center items-center border-bg-icons rounded-lg text-bg-icons font-semibold text-sm" onClick={closeCart}>Go back</button>
                <button className="h-12 w-44 border border-bg-icons p-3.5 flex justify-center items-center bg-bg-icons rounded-lg font-semibold text-sm" disabled={orderItems.length === 0} onClick={check}>Continue to Payment</button>
            </main>
        </footer>
        </section>
        
    )
}