import Cart from "../components/cart";
import HomeContent from "../components/homeContent";
import Sidebar from "../components/sidebar";

export function LandingPage(){
    return(
        <section className="flex">
            <Sidebar />
            <HomeContent />
            <Cart />
        </section>
    )
}