export default function OrderSettings(){
    return(
        <section className="px-5 py-7">
            <header className="flex justify-between items-center border-b-2 mb-2 pb-3 border-line">
                <li className="text-white font-medium text-semibold list-none capitalize">customer</li>
                <li className="text-white font-medium text-semibold list-none capitalize">Total payment</li>
                <li className="text-white font-medium text-semibold list-none capitalize mr-24">status</li>
            </header>
            <ul className="flex justify-between items-center">
                <h3 className="font-bold text-xl text-white">Order #34562</h3>
                <li className="text-white text-sm font-normal">$20.59</li>
                <li className="px-3 py-1 bg-[#9290fe65] text-[#9290FE] rounded-3xl flex justify-center items-center w-[157px] capitalize">pending</li>
            </ul>
        </section>
    )
}