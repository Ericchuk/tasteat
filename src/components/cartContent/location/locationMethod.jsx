import card2 from '../../../assets/sidebar icons/card2.svg'

export default function LocationMethod(){
    return(
        <section>
            <h3>Location Method</h3>
            <aside className="border flex justify-center items-center flex-col p-3.5 my-4 rounded-lg bg-bg-color border-line">
                <img src={card2} alt="gps" />
                <p className="mt-1">Use GPS</p>
            </aside>
        </section>
    )
}