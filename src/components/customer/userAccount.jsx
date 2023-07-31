import UserLoggedIn from "./logged-in";
import googleIcon from '../../assets/sidebar icons/google-icon.svg'

export default function UserAccount(){
    return(
        <section className="bg-sidebar rounded-lg mt-5">
            <div className="p-3">
                <div className="border-2 border-lighter-text rounded-lg flex justify-center items-center flex-col py-2 bg-bg-color">
                <img src={googleIcon} alt="google icon" />
                <p className="text-sm">Log in with Google</p>
            </div>
            </div>
            
            {/* <UserLoggedIn /> */}
        </section>
    )
}