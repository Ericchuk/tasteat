import { useContext } from "react"
import { AppContext } from "../../context"

export default function MostOrderedContent(){
    const { mostOrderedFood } = useContext(AppContext);

    const food = mostOrderedFood.map((item) => {
        const { dish, dishImage,orders} = item;
        return(
            <section className="flex justify-start items-center mt-5 px-5">
            <img src={dishImage} alt={dish} className="rounded-circle mr-6 h-14 w-[61px]"/>
            <aside>
                <h4  className="text-base capitalize">{dish}</h4>
                <p className="text-sm text-lighter-text">{orders}</p>
            </aside>
        </section>
        )
    })
    return(
        <div>
            {food}
        </div>
    )
}