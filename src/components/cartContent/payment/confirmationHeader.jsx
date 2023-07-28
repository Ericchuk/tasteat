import back from '../../../assets/sidebar icons/Line.svg'
import plus from '../../../assets/sidebar icons/plus.svg';

export default function ConfirmationHeader(){
    return(
        <header className="border-b pb-5 border-line">
            <img src={back} alt="back" className="py-5"/>
            <aside className="flex justify-between items-center">
                <div>
                    <h3 className="font-semibold text-3xl text-white my-2">Confirmation</h3>
                    <p className="text-lighter-text">Order #34582</p>
                </div>
                <span className="bg-bg-icons w-12 h-12 rounded-lg flex justify-center items-center">
                    <img src={plus} alt="add more to cart" />
                </span>
                
            </aside>
        </header>
    )
}