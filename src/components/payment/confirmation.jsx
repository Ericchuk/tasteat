import ConfirmationHeader from './confirmationHeader'
import Orders from '../cartContent/orders';
import CartFooter from '../cartContent/cartFooter';
import { useContext } from 'react';
import { AppContext } from '../../context';

export default function ConfirmationPage(){
    const {payment} = useContext(AppContext)
    return(
        <section className={`border-r border-line bg-bg-color w-[420px] px-3 py-4 rounded-l-lg rounded-bl-lg  h-[171vh] z-10  ${payment ? "absolute -left-6" : "relative left-auto" }`}>
            <ConfirmationHeader />
            <Orders />
            <CartFooter />
        </section>
    )
}