import Header from '../payment/paymentHeader';
import LocationMethod from './locationMethod';
import LocationManual from './locationMethodManual';
import CartFooterButton from '../cartFooterButton'

export default function LocationPage(){
    return(
        <section>
            <Header headText="Location" headerDescription="Let us know where you are!" />
            <LocationMethod />
            <aside className="flex justify-center items-center">
                <hr className="h-0.5 w-6/12  border border-line" />
                <small className="mx-3">or</small>
                <hr  className="h-px w-6/12  border border-line"/>
            </aside>
            <LocationManual />
            <CartFooterButton button1="Cancel" button2="Confirm Payment" />
        </section>
    )
}