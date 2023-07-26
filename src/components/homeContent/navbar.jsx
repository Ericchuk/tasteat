import '../../styles/menuNavbar.css';

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

    const navItem = navItems.map((item) => {
        return(
            <li key={item.id} className={`list-none p-2 ml-5 items-start relative cursor-pointer text-white capitalize ${item.itemName === 'Hot dishes' ? 'text-bg-icons' : ''}`}>
                <span className={` w-10 h-0 absolute bottom-0 left-2 ${item.itemName === 'Hot dishes' ? 'border border-bg-icons' : ""}`}></span>
                <p className='font-semibold text-sm w-auto'>{item.itemName}</p>
            </li>
        )
    })

    return(
        <nav className="menuNav mt-5 flex justify-start items-center w-8/12 border border-line border-t-0 border-l-0 border-r-0 relative">
            {navItem}
        </nav>
    )
}