import '../../styles/menuNavbar.css';
import { useContext } from "react";
import {AppContext} from '../../context'

export default function MenuNavbar(){

    const navItems = [
        {
            id:0,
            itemName:"Hot dishes"
        },
        {
            id:1,
            itemName:"Cold dishes"
        },
        {
            id:2,
            itemName:"Soup"
        },
        {
            id:3,
            itemName:"Grill"
        },
        {
            id:4,
            itemName:"Appetizer"
        },
        {
            id:5,
            itemName:"Dessert"
        },
    ]

    const {openCart, removeCart} = useContext(AppContext)

    const navItem = navItems.map((item) => {
        return(
            <li key={item.id} className={`list-none p-2 ml-5 items-start relative cursor-pointer text-white capitalize ${item.itemName === 'Hot dishes' ? 'text-bg-icons' : ''}`}>
                <span className={` w-10 h-0 absolute bottom-0 left-2 ${item.itemName === 'Hot dishes' ? 'border border-bg-icons' : ""}`}></span>
                <p className='font-semibold text-sm w-auto'>{item.itemName}</p>
            </li>
        )
    })

    return(
        <nav className={`menuNav mt-5 flex justify-start items-center border border-line border-t-0 border-l-0 border-r-0 relative ${openCart ? 'w-12/12' : "w-8/12"} ${removeCart ? 'w-full px-5' : "w-8/12"}`}>
            {navItem}
        </nav>
    )
}