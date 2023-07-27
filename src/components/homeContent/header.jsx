import search from '../../assets/sidebar icons/Mask.svg'

export default function Header(){
//     const today = new Date();
// const year = today.getFullYear();
// const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1 and pad with leading zero if needed
// const day = String(today.getDate()).padStart(2, '0'); // Pad with leading zero if needed

// const currentDate = `${year}-${month}-${day}`;
// {console.log(currentDate);}

const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const currentDate = today.toLocaleString('en-US', options);



    return(
        <header className='flex justify-between item-start text-white'>
            <div>
            <h1 className='font-universal text-heading font-semibold'>Riverside Flamez</h1>
            <p className='font-normal text-lighter-text'>{currentDate}</p>
            </div>
            <label htmlFor="searchbar" className="flex relative justify-center items-center">
                <input type="text" placeholder="Search for food, coffee,etc..." className='w-56 h-12 rounded-lg text-lighter-text bg-input-bg border-2 border-line pl-8 text-sm outline-none' />
                <img src={search} alt="search-icon" className='absolute start-3' />
            </label>
        </header>
    )
}