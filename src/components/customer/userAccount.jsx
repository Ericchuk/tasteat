import UserLoggedIn from "./logged-in";
import googleIcon from '../../assets/sidebar icons/google-icon.svg';
import { useContext } from 'react';
import { AppContext } from '../../context'; 

export default function UserAccount(){
    const {signIn, authenticated} = useContext(AppContext)
    return(
        <section className="bg-sidebar rounded-lg mt-5">
            {authenticated ? 
       <UserLoggedIn />     :
            <div className="p-3 cursor-pointer" onClick={signIn}>
                <div className="border-2 border-lighter-text rounded-lg flex justify-center items-center flex-col py-2 bg-bg-color">
                <img src={googleIcon} alt="google icon" />
                <p className="text-sm">Log in with Google</p>
                {console.log(authenticated)}
            </div>
            </div>}
        </section>
    )
}