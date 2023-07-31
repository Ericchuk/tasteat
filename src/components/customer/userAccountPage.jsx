import Header from "../homeContent/header";
import UserAccount from "./userAccount";

export default function UserAccountPage(){
    return(
        <section className="w-full px-5 py-6 bg-bg-color text-white ">
            <Header headText='user account' />
            <hr className="border-2 border-line my-5" />
            <UserAccount />
        </section>
    )
}