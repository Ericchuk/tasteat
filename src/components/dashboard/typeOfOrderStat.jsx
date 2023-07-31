import Stat from './stats'
import { useContext } from "react";
import { AppContext } from "../../context";

export default function TypeOfOrderStat(){

    const { data } = useContext(AppContext);

    return(
        <section className="flex justify-between items-center px-5">
            <aside>
                <Stat />
            </aside>
            <aside>{data}</aside>
        </section>
    )
}