import {useState, useContext} from 'react';
import {AppContext} from '../../context';


export default function Dishes(){
    const {dishes, addToCart, onBar, filterByPrice, filteredItems, mainDishes, imageUrl} = useContext(AppContext)
   
    return(
        <section className='flex flex-wrap justify-start items-center py-14'>
            {
                mainDishes.map((item, index) => {
                    const { id,
                        dishImage,
                        dishName,
                        dishPrice,
                        availability,
                        dishCategory } = item.data?.data;
                    return(
                        <section key={item?.key}>
                           { dishCategory == onBar && filterByPrice == "Cheaper" && dishPrice < 3 ? <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={imageUrl[index]?.url} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${dishPrice}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(mainDishes[item?.key])}>Order now</button>
                        </aside> : 
                            dishCategory == onBar && filterByPrice == "Mid-Range" && dishPrice < 5 && dishPrice > 3
                        ? <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={imageUrl[index]?.url} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${dishPrice}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(mainDishes[item?.key])}>Order now</button>
                        </aside> :
                    
                       "" }
                        </section>
                        
                       
                    ) 
                })
            }
        </section>
    )
}