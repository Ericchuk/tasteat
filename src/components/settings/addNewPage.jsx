import CartFooterButton from "../cartContent/cartFooterButton";
import { useContext } from "react";
import { AppContext } from "../../context";

export default function AddNewPage() {
    const {writeUserData, setNewItem, newItem, toggleBoxToCreateNewItem, handleInputChange, submit, dishImage, dishName, discountAmount, dishCategory, dishRange,iAvailable, dishPrice, imageToStorage,
    setImageToStorage,handleImageUpload} = useContext(AppContext)


    return (
        <section className="fixed top-0 left-0 bg-[#0a0a0a7e] w-full h-screen flex justify-center items-center z-10">
            <main className="w-4/12 bg-bg-color px-4 py-6 rounded-lg">
                <label htmlFor="image" className="">
                    <p>Dish Image</p>
                    <input type="file" name="dishImage" accept="image/png, image/gif, image/jpeg, img/svg" value={dishImage} onChange={handleImageUpload} />
                </label>
                <label htmlFor="dishName" className="w-full mt-2">
                    <p className="mt-2">Dish Name</p>
                    <input type="text" name="dishName" className="w-full h-10 my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize"  value={dishName} onChange={handleInputChange}/>
                </label>
                <aside className="flex justify-center items-center w-full">
                    <label htmlFor="dishPrice" className="w-full mt-2">
                        <p className="mt-2">Dish Price</p>
                        <input type="number" name="dishPrice" className="w-full my-1 mr-2 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center" value={dishPrice} onChange={handleInputChange}/>
                    </label>
                    <label htmlFor="dishAvailable" className="w-full mt-2">
                        <p className="mt-2 ml-2">Dish Available</p>
                        <input type="number" name="iAvailable" className="w-[95%] my-1 ml-2 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center" value={iAvailable} onChange={handleInputChange}/>
                    </label>
                </aside>
                <label htmlFor="discountAmount" className="w-full mt-2">
                        <p className="mt-2">Discount Amount</p>
                        <input type="number" name="discountAmount" className="w-full my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center" value={discountAmount} onChange={handleInputChange}/>
                    </label>
                <aside className="flex justify-center items-center w-full">
                    <label className="w-full mt-2" htmlFor="dishCategory">
                        <p className="mt-2">Dish Category</p>
                        <select className="w-full my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center" name="dishCategory" value={dishCategory} onChange={handleInputChange}>
                            <option value="Hot dishes">Hot dishes</option>
                            <option value="Cold dishes">Cold dishes</option>
                            <option value="soup">soup</option>
                            <option value="grill">grill</option>
                            <option value="appetizer">appetizer</option>
                            <option value="Dessert">Dessert</option>
                        </select>
                    </label>

                    <label className="w-full ml-2 mt-2" htmlFor="dishRange">
                        <p className="mt-2">Dish range</p>
                        <select className="w-full my-1 px-3 py-1 bg-sidebar rounded-lg outline-none capitalize h-10 flex justify-center items-center" name="dishRange" value={dishRange} onChange={handleInputChange}>
                            <option value="Cheaper">Cheaper</option>
                            <option value="Midrange">Midrange</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Cripsy">Cripsy</option>
                        </select>
                    </label>
                </aside>


                <CartFooterButton button1="Cancel" onClick1={toggleBoxToCreateNewItem} button2="Save" onClick2={submit} />
            </main>


        </section>
    )
}