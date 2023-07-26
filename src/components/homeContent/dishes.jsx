import noodles from '../../assets/landing page image/image 4 (3).png'
import pasta from '../../assets/landing page image/image 4.png'
import dumpling from '../../assets/landing page image/image 4 (1).png'
import spinach from '../../assets/landing page image/image 4 (2).png'
import instantNoodles from '../../assets/landing page image/image 4(1).png'

export default function Dishes(){

    const dishes = [
        {
            id:0,
            dishImage:noodles,
            dishName:'Spicy seasoned seafood noodles',
            price:2.29,
            availability:'20 Bowls available'
        },
        {
            id:1,
            dishImage:pasta,
            dishName:'Salted Pasta with mushroom sauce',
            price:2.69,
            availability:'11 Bowls available'
        },
        {
            id:2,
            dishImage:dumpling,
            dishName:'Beef dumpling in hot and sour soup',
            price:2.99,
            availability:'16 Bowls available'
        },
        {
            id:3,
            dishImage:dumpling,
            dishName:'Beef dumpling in hot and sour soup',
            price:2.99,
            availability:'16 Bowls available'
        },
        {
            id:4,
            dishImage:spinach,
            dishName:'Healthy noodle with spinach leaf',
            price:3.29,
            availability:'22 Bowls available'
        },
        {
            id:5,
            dishImage:spinach,
            dishName:'Hot spicy fried rice with omelet',
            price:3.49,
            availability:'13 Bowls available'
        },
        {
            id:6,
            dishImage:instantNoodles,
            dishName:'Spicy instant noodle with special omelette',
            price:3.59,
            availability:'17 Bowls available'
        },
        {
            id:7,
            dishImage:instantNoodles,
            dishName:'Spicy instant noodle with special omelette',
            price:3.59,
            availability:'17 Bowls available'
        },
    ]

    const dish = dishes.map((item) => {
        return(
            <aside key={item.id} className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                <img src={item.dishImage} alt={item.dishName} className='rounded-circle absolute -top-10'/>
                <p className='text-center w-36 my-3'>{item.dishName}</p>
                <p className='text-[#ABBBC2] text-sm'>${item.price}</p>
                <p className="text-[#ABBBC2] text-sm">{item.availability}</p>
                <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3'>Order now</button>
            </aside>
        )
    })
    return(
        <section className='flex flex-wrap justify-between items-center py-14'>
            {dish}
        </section>
    )
}