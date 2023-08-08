import NotificationHead from '../notification/notificationHead'

export default function OrderSettings(){
    return(
        <main className="px-5 bg-sidebar rounded-lg h-4/4 w-full py-5">
            
                 <NotificationHead
            headText="order report"
            option1="Filter order"
            option2="pending"
            option3="delivered"
          />
           <section className='pt-12'>
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
            
        </main>
    )
}