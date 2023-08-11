import CartFooterButton from "../cartContent/cartFooterButton";
import back from '../../assets/sidebar icons/Line.svg'
import { useContext } from "react";
import { AppContext } from "../../context";

export default function AddNewPage() {
    const {writeUserData, setNewItem, newItem, toggleBoxToCreateNewItem} = useContext(AppContext)


    return (
        <section className="fixed top-0 left-0 bg-[#0a0a0a7e] w-full h-screen flex justify-center items-center">
            <main className="w-4/12 bg-bg-color px-4 py-6 rounded-lg">
                <label htmlFor="image" className="">
                    <p>Dish Image</p>
                    <input type="file" name="dishImage" accept="image/png, image/gif, image/jpeg image/*" />
                </label>
                <label htmlFor="dishName" className="w-full mt-2">
                    <p className="mt-2">Dish Name</p>
                    <input type="text" name="dishName" className="w-full h-10 my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize" />
                </label>
                <aside className="flex justify-center items-center">
                    <label htmlFor="dishPrice" className="w-full mt-2">
                        <p className="mt-2">Dish Price</p>
                        <input type="text" name="dishPrice" className="w-11/12 my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center"/>
                    </label>
                    <label htmlFor="dishAvailable" className="w-full mt-2">
                        <p className="mt-2">Dish Available</p>
                        <input type="text" name="dishAvailable" className="w-11/12 my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center"/>
                    </label>
                </aside>
                <aside className="flex justify-center items-center">
                    <label className="w-full mt-2">
                        <p className="mt-2">Dish Category</p>
                        <select className="w-11/12 my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center">
                            <option value="Hot dishes">Hot dishes</option>
                            <option value="Cold dishes">Cold dishes</option>
                            <option value="soup">soup</option>
                            <option value="grill">grill</option>
                            <option value="appetizer">appetizer</option>
                            <option value="Dessert">Dessert</option>
                        </select>
                    </label>

                    <label className="w-full mt-2">
                        <p className="mt-2">Dish range</p>
                        <select className="w-11/12 my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center">
                            <option value="Cheaper">Cheaper</option>
                            <option value="Midrange">Midrange</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Cripsy">Cripsy</option>
                        </select>
                    </label>
                </aside>


                <CartFooterButton button1="Cancel" onClick1={toggleBoxToCreateNewItem} button2="Save" onClick2={writeUserData} />
            </main>


        </section>
    )
}