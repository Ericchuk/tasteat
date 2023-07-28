import ConfirmationHeader from './confirmationHeader'
import Orders from '../orders';
import CartFooter from '../cartFooter'

export default function ConfirmationPage(){
    return(
        <section className="border-r border-line">
            <ConfirmationHeader />
            <Orders />
            <CartFooter />
        </section>
    )
}