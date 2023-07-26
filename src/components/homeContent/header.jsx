import search from '../../assets/sidebar icons/Mask.svg'

export default function Header(){
    return(
        <header className='flex justify-between item-start text-white'>
            <div>
            <h1 className='font-universal text-heading font-semibold'>Riverside Flamez</h1>
            <p className='font-normal text-lighter-text'>date</p>
            </div>
            <label htmlFor="searchbar" className="flex relative justify-center items-center">
                <input type="text" placeholder="Search for food, coffee,etc..." className='w-56 h-12 rounded-lg text-lighter-text bg-input-bg border-2 border-line pl-8 text-sm outline-none' />
                <img src={search} alt="search-icon" className='absolute start-3' />
            </label>
        </header>
    )
}