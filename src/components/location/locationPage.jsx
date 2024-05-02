import Header from '../payment/paymentHeader';
import LocationMethod from './locationMethod';
import LocationManual from './locationMethodManual';
import CartFooterButton from '../cartContent/cartFooterButton'
import { useContext } from 'react';
import { AppContext } from '../../context';

export default function LocationPage(){
    const {closeCart} = useContext(AppContext)
    return(
        <section className='w-[500px] px-6'>
            <Header headText="Location" headerDescription="Let us know where you are!" />
            <LocationMethod />
            <aside className="flex justify-center items-center">
                <hr className="h-0.5 w-6/12  border border-line" />
                <small className="mx-3 text-line">or</small>
                <hr  className="h-px w-6/12  border border-line"/>
            </aside>
            <LocationManual />
            <aside className='mt-20 mb-0'>
                <CartFooterButton button1="Cancel" 
                onClick1={closeCart} button2="Confirm Payment" />
            </aside>
            
        </section>
    )
}