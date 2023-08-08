import SignedOut from './signedOut';
import { useContext } from 'react'
import { AppContext } from '../../context';

export default function SignOutPage(){
    const { authenticated, logOut } = useContext(AppContext)
    return(
        <section className="bg-sidebar rounded-lg mt-5 w-full">
            {authenticated ? 
                <SignedOut />
            :
            <div className="p-3 cursor-pointer" onClick={logOut}>
                <div className="border-2 border-lighter-text rounded-lg flex justify-center items-center flex-col py-2 bg-bg-color">
                <p className="text-sm text-white">Log out</p>
                </div>
            </div>}
        </section>
    )
}