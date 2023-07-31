import { useContext } from 'react'
import {AppContext } from "../../context"
import search from '../../assets/sidebar icons/Mask.svg'

export default function Header({headText}){
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const currentDate = today.toLocaleString('en-US', options);

const {removeCart} = useContext(AppContext);

    return(
        <header className='flex justify-between item-center text-white'>
            <div>
            <h1 className='font-universal capitalize text-heading font-semibold'>{headText}</h1>
            <p className='font-normal text-lighter-text'>{currentDate}</p>
            </div>
           {removeCart ? "" : <label htmlFor="searchbar" className="flex relative justify-center items-center">
                <input type="text" placeholder="Search for food, coffee,etc..." className='w-56 h-12 rounded-lg text-lighter-text bg-input-bg border-2 border-line pl-8 text-sm outline-none' />
                <img src={search} alt="search-icon" className='absolute start-3' />
            </label>}
        </header>
    )
}