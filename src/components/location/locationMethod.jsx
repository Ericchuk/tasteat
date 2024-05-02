import card2 from '../../assets/sidebar icons/card2.svg'
import { useContext } from 'react';
import { AppContext } from '../../context';
export default function LocationMethod(){
    const {getLocation,location} = useContext(AppContext)
    return(
        <section>
            <h3 className='font-semibold text-xl py-4'>Location Method</h3>
            <aside className="border flex justify-center items-center flex-col p-3.5 my-4 rounded-lg bg-bg-color border-line" onClick={getLocation}>
                <img src={card2} alt="gps" />
                <p className="mt-1" >Use GPS</p>
                <small>{location}</small>
            </aside>
        </section>
    )
}