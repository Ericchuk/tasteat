import filter from '../../assets/sidebar icons/filter.svg';

export default function NotificationHead(){
    return(
        <section className="flex justify-between items-center px-5">
            <h3 className="font-bold text-xl">Your Order</h3>
            <label className="relative flex justify-start items-center">
                <img src={filter} alt="filter" className="absolute left-3" />
                <select className="border border-line bg-sidebar text-white w-36 h-11 justify-start items-center appearance-none pl-10 px-3.5 rounded-lg">
                    <option value="Filter Order">Filter Order</option>
                    <option value="Filter Order">Preparing</option>
                    <option value="Filter Order">Completed</option>
                </select>
            </label>
        </section>
    )
}