import dropdownicon from "../../assets/sidebar icons/Mask.png";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
export default function DishSelect() {
  const options = [
    {
      id:0,
      options:'Cheaper'
    },
    {
      id:1,
      options:'Mid-Range'
    },
    {
      id:2,
      options:'Luxury'
    }
  ]
  const { changeFilter, filterByPrice } = useContext(AppContext);

  function filter(e){
    // if(filterByPrice === e.target.value && filterByPrice < 3){
    //     console.log("Cheaper")
    // }else{
    //   console.log("ddddd")
    // }
    console.log("fdffff")
  }

  const optionsArray = options.map((item) => {
    return (
          
          <option key={item.id} value={item.options} onClick={filter}>{item.options}</option>
    )
  })

  return (
    <aside className="mt-5 flex justify-between items-center">
      <h3 className="text-white text-xl font-semibold">Choose Dishes</h3>
      <label
        htmlFor="dropdown"
        className="relative flex justify-start items-center"
      >
        <select
          id="dropdown"
          className="bg-sidebar border border-line text-white rounded-lg w-44 h-12 flex justify-center items-center px-10 py-1.5 appearance-none outline-none"
          value={filterByPrice}
          onChange={changeFilter}
        >
          {optionsArray}
        </select>
        <img src={dropdownicon} alt="dropdown" className="absolute left-3" />
      </label>
    </aside>
  );
}
