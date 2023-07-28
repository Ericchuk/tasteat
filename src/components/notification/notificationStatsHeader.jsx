export default function NotificationStatHeader(){
    return(
        <section className="border-b-2 border-line px-5 py-2">
            <ul className="flex justify-between items-center">
                <li className="font-semibold text-base">Customer</li>
                <li className="font-semibold text-base">Menu</li>
                <li className="font-semibold text-base">Total Payment</li>
                <li className="font-semibold text-base pr-28">Status</li>
            </ul>
        </section>
    )
}