import add from "../../assets/sidebar icons/plus.svg";
import { useContext } from "react";
import { AppContext } from "../../context";
import AddNewPage from "./addNewPage";
import editIcon from '../../assets/landing page image/Vector.png'
import deleteIcon from '../../assets/sidebar icons/bin.svg'

export default function AddOrEditDish() {
  const { newItem, retrieved, imageUrl, toggleBoxToCreateNewItem, onBar, deleteItemFromSubDishes,withImage, editItemInSubdish } = useContext(AppContext);
  console.log(withImage)

  const dish = withImage.map((data, index) => {
    const {
      dishName,
      dishPrice,
      availability } = data.item.data;
      const {key} = data.item
      const {url, imageKey} = data.item2
    return (
      <div
        key={index}    >
       <div className=" w-[221px] h-[299px] m-2 pt-5 flex justify-center items-center flex-col text-center bg-sidebar rounded-lg border border-line">
          <img src={url} alt={dishName} className="rounded-circle" />
        <p className="w-40 my-2">{dishName}</p>
        <aside className="flex justify-between items-center w-36 px-2 text-lighter-text w-[127px] h-[45px] my-1">
          <small>$ {dishPrice}</small>
          <hr className="border-2 border-lighter-text rounded-lg" />
          <small>{availability} Bowls</small>
        </aside>


        <aside className="flex rounded-b-lg w-[221px] h-[72px]">
            <button className="w-full mr-2 bg-[#ea736d5e] text-bg-icons flex justify-center rounded-bl-lg items-center" onClick={() => editItemInSubdish(data)}>
              <img src={editIcon} className="mr-2" />
              <p>Edit dish</p>
            </button>
            <button className="w-full l-2 bg-[#ea736d5e] text-bg-icons flex justify-center items-center rounded-br-lg " onClick={() => deleteItemFromSubDishes(key, url, imageKey)}>
              <img src={deleteIcon} className="mr-2" />
              <p>Delete dish</p>
            </button>
        </aside>
        </div>
        
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
