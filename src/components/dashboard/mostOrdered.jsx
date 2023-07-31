import dropdownicon from '../../assets/sidebar icons/Mask.png'

export default function MostOrdered({headerText}){
    return(
        <section className="px-5 mb-3">
            <header className=' flex justify-between items-center pb-1'>
                <h2 className='capitalize text-white text-xl font-semibold'>{headerText}</h2>
                <label htmlFor='dropdown' className="relative flex justify-start items-center">
            <select id="dropdown" className='bg-sidebar border border-line text-white rounded-lg w-32 h-12 flex justify-center items-center pl-10 py-1.5 appearance-none'>
                    <option value="Today">Today</option>
                    <option value="Last Week">Last Week</option>
                    <option value="Last Month">Last Month</option>
                    <option value="A Year">A Year</option>
                </select>
                <img src={dropdownicon} alt="dropdown" className="absolute left-3" />
            </label>
            </header>
        </section>
    )
}