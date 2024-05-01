import {useState, useContext} from 'react';
import {AppContext} from '../../context';


export default function Dishes(){
    const {dishes, addToCart, onBar, filterByPrice, filteredItems} = useContext(AppContext)
 
    return(
        <section className='flex flex-wrap justify-start items-center py-14'>
            {
                dishes.map((item) => {
                    const { id,
                        dishImage,
                        dishName,
                        price,
                        availability,
                        category } = item;
                    return(
                        <section key={id}>
                            { category === onBar && filterByPrice === "Cheaper" && price < 3 ?
                             <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={dishImage} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${price}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(dishes[id])}>Order now</button>
                        </aside> : category === onBar && filterByPrice === "Mid-Range" && price > 3 && price < 5? <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={dishImage} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${price}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(dishes[id])}>Order now</button>
                        </aside> : filteredItems === true ? <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={dishImage} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${price}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(dishes[id])}>Order now</button>
                        </aside> : ""
                        } 
                        </section>
                        
                       
                    ) 
                })
            }
        </section>
    )
}