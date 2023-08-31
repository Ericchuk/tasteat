import SignedOut from './signedOut';
import { useContext } from 'react'
import { AppContext } from '../../context';

export default function SignOutPage(){
    const { authenticated, logOut } = useContext(AppContext)
    return(
        <section className="bg-bg-color w-full text-center">
            {authenticated ? 
               <div className="p-3 cursor-pointer" onClick={logOut}>
                <div>
                <p className="text-sm text-white">Log out</p>
                </div>
            </div>
            :
            <div className="text-center flex justify-center items-center pt-12 cursor-pointer">
                 <SignedOut />
            </div>
            }
        </section>
    )
}