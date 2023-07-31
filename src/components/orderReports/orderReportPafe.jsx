import NotificationHead from "../notification/notificationHead"
import NotificationStatHeader from "../notification/notificationStatsHeader"
import OrderInNotification from "../notification/ordersInNotification"

export default function OrderReportPage(){
    return(
        <section className="w-full bg-bg-color p-6 py-8">
            <h1 className="text-white text-xl font-semibold mb-4">Order reports</h1>
            <aside className="text-white bg-sidebar py-8 rounded-lg">
                <NotificationHead headText="Order report" option1="Filter options" option2="Preparing" option3="sent out" />
            <NotificationStatHeader />
            <OrderInNotification />
            </aside>
            
        </section>
    )
}