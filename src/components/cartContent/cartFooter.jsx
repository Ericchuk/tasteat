import { useContext } from 'react';
import {AppContext} from '../../context';




export default function CartFooter(){

    const {subTotal} = useContext(AppContext)

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
                <b className="">${subTotal}</b>
            </aside>
        )
    })

    return(
        <section>
            <footer className="drop-shadow-sm border-t border-line pt-4">
            {list}
    
        </footer>
        </section>
        
    )
}