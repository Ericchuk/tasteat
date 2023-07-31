import {useState, useContext} from 'react';
import {AppContext} from '../../context';


export default function Dishes(){
    const {dishes, addToCart} = useContext(AppContext)
 
    return(
        <section className='flex flex-wrap justify-between items-center py-14'>
            {
                dishes.map((item) => {
                    return(
                        <aside key={item.id} className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={item.dishImage} alt={item.dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{item.dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${item.price}</p>
                            <p className="text-[#ABBBC2] text-sm">{item.availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={()=> addToCart(item)}>Order now</button>
                        </aside>
                    )
                })
            }
        </section>
    )
}