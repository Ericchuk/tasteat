import DishSelect from "./homeContent/dishSelect";
import Dishes from "./homeContent/dishes";
import Header from "./homeContent/header";
import MenuNavbar from "./homeContent/navbar";
import { useContext } from "react";
import { AppContext } from "../context";

export default function HomeContent(){
    const { display} = useContext(AppContext);
    return(
        <section className="bg-bg-color  w-11/12 py-7 px-7">
            <Header headText="Riverside Flamez"  />
            <MenuNavbar />
            <DishSelect />
           {display ? <Filtered /> : <Dishes />}
        </section>
    )
}