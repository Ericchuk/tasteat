import add from "../../assets/sidebar icons/plus.svg";
import { useContext } from "react";
import { AppContext } from "../../context";
import AddNewPage from "./addNewPage";


export default function AddOrEditDish() {
  const { dishes, newItem, close, toggleBoxToCreateNewItem } = useContext(AppContext);

  const dish = dishes.map((item) => {
    const { dishName, dishImage, id, price, availability } = item;
    return (
      <div
        key={id}
        className=" w-[221px] h-[299px] m-1 pt-5 flex justify-center items-center flex-col text-center bg-sidebar rounded-lg border border-line"
      >
        <img src={dishImage} alt={dishName} className="rounded-circle" />
        <p className="w-40 my-2">{dishName}</p>
        <aside className="flex justify-between items-center w-36 px-2 text-lighter-text my-1">
          <small>${price}</small>
          <hr className="border-2 border-lighter-text rounded-lg" />
          <small>{availability}</small>
        </aside>
        <button className="w-full bg-[#ea736d5e] text-bg-icons h-[52px] mt-1 rounded-b-lg">
          Edit dish
        </button>
      </div>
    );
  });


  return (
    <article className="relative">
      <section className="text-white flex flex-wrap px-5 py-6">
        <div className="w-[221px] h-[299px] cursor-pointer border-dashed border-bg-icons border rounded-lg flex justify-center items-center flex-col m-1" onClick={toggleBoxToCreateNewItem}>
          <img src={add} alt="add" />
          <p className="text-bg-icons">Add new dish</p>
          
        </div>
        {newItem ? <AddNewPage /> : ""}
        {dish}

      </section>
    </article>
  );
}
