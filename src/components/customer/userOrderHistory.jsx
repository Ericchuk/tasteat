import { useContext } from "react";
import { AppContext } from "../../context";
import Header from "../homeContent/header";
import NotificationHead from "../notification/notificationHead";
import NotificationStatHeader from "../notification/notificationStatsHeader";
import OrderInNotification from "../notification/ordersInNotification";

export default function UserOrderHistory(){
    const { usera, orderFromDb, } = useContext(AppContext);
    
    const {displayName } = usera
    console.log(orderFromDb,)

    return(
        <section className="mx-1 rounded-lg bg-sidebar py-6">
            <div className="">
<NotificationHead headText={`${displayName}'s orders`} option1="Filter Order" option2="Pending" option3="disbursted" />
            </div>
            
            <NotificationStatHeader />
            <OrderInNotification />
        </section>
    )
}