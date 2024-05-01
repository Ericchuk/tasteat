import { useContext } from "react";
import { AppContext } from "../../context";

export default function Filtered(){
    const {filteredItems} = useContext(AppContext);
    return(
        <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={dishImage} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${price}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(dishes[id])}>Order now</button>


                            {
                filteredItems.map((items) => {
                    const { id,
                        dishImage,
                        dishName,
                        price,
                        availability,
                        category } = items;
                        return(
                            <ul key={id}>
                                <li>{dishName}</li>
                            </ul>
                        )
                })
            }
                        </aside>
    )
}