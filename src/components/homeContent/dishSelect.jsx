import dropdownicon from '../../assets/sidebar icons/Mask.png'

export default function DishSelect(){
    return(
        <aside className='mt-5 flex justify-between items-center'>
            <h3 className='text-white text-xl font-semibold'>Choose Dishes</h3>
            <label htmlFor='dropdown' className="relative flex justify-start items-center">
            <select id="dropdown" className='bg-sidebar border border-line text-white rounded-lg w-44 h-12 flex justify-center items-center px-10 py-1.5 appearance-none'>
                    <option value="Cheaper">Cheaper</option>
                    <option value="Mid-range">Mid-range</option>
                    <option value="Luxury">Luxury</option>
                    <option value="Crispy">Crispy</option>
                </select>
                <img src={dropdownicon} alt="dropdown" className="absolute left-3" />
            </label>
                
        </aside>
    )
}