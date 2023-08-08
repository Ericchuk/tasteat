import eren from '../../assets/landing page image/Avatar 1.svg'
import { useContext } from 'react'
import { AppContext } from '../../context'

export default function UserProfileDetails(){
    const {usera, authenticated} = useContext(AppContext)
    return(
        <aside className="w-7/12 rounded-lg p-6 h-[347px] bg-sidebar">
            <div className="flex justify-start items-center">
                <img src={usera.photoURL} alt="user-image" className='w-[74px] h-[74px] mr-6 rounded-circle' />
                <aside>
                    <h5 className='font-semibold text-white'>{usera.displayName}</h5>
                    <p className='text-lighter-text'>Member since 12 mar 2023</p>
                </aside>
            </div>
            <aside className='flex flex-col justify-start items-start mt-4'>
                <label htmlFor="name" className='text-sm text-white capitalize mb-3'>Name</label>
                <input type="text" placeholder={usera.displayName} value={usera.displayName}className='w-full h-12 pl-4 rounded-lg outline-none bg-bg-color text-lighter-text flex justify-center items-center capitalize'/>
                <label htmlFor="name" className='text-sm text-white capitalize mb-3 mt-4'>Email</label>
                <input type="email" placeholder={usera.email} value={usera.email} className='w-full h-12 pl-4 rounded-lg outline-none bg-bg-color text-lighter-text flex justify-center items-center capitalize'/>
            </aside>
            
        </aside>
    )
}