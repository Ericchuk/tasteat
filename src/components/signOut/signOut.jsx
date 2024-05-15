import SignedOut from './signedOut';
import { useContext } from 'react'
import { AppContext } from '../../context';

export default function SignOutPage(){
    const { authenticated, logOut } = useContext(AppContext)
    return(
        <section className="bg-bg-color w-full text-center">
            {authenticated ? 
            //    <div className="bg-sidebar rounded-lg mt-5 p-3 cursor-pointer" >
            //     <div>
            //     <p className="text-sm text-white"></p>
            //     </div>
            // </div>
             <div className="p-3 cursor-pointer w-auto" onClick={logOut}>
             <div className="border-2 border-lighter-text rounded-lg flex justify-center items-center flex-col py-2 bg-bg-color">
             <p className="text-[30px] text-white">Log out</p>
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