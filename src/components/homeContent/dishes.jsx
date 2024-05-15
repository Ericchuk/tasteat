import {useState, useContext} from 'react';
import {AppContext} from '../../context';


export default function Dishes(){
    const {dishes, addToCart, onBar, filterByPrice, withImage, imageUrl} = useContext(AppContext)


    return(
        <section className='flex flex-wrap justify-start items-center py-14'>
            {
                withImage.map((data, index) => {
                    const {
                        dishName,
                        dishPrice,
                        availability,
                        dishCategory } = data.item.data;
                        const {url} = data.item2
                    return(
                        <section key={index}>
                            { withImage ?
                           <section>
                            { dishCategory == onBar && filterByPrice == "Cheaper" && dishPrice < 3 ? <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={url} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${dishPrice}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(withImage[index])}>Order now</button>
                        </aside> : 
                            dishCategory == onBar && filterByPrice == "Mid-Range" && dishPrice < 5 && dishPrice > 3
                        ? <aside  className='flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl relative py-4'>
                            <img src={url} alt={dishName} className='rounded-circle absolute -top-10'/>
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <p className='text-[#ABBBC2] text-sm'>${dishPrice}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(withImage[index])}>Order now</button>
                        </aside> :
                    
                       "" } 
                       </section> : ""}
                        </section>
                        
                       
                    ) 
                })
            }
        </section>
    )
}