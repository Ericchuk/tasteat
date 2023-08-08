import Stat from './stats'
import { useContext } from "react";
import { AppContext } from "../../context";

export default function TypeOfOrderStat(){

    const { datas } = useContext(AppContext);
    
  const data = datas.map((item) => {
    const { color, id, indicate, amount, desc } = item;
    return (
      <div key={id} className="flex justify-start items-start mt-5">
        <span
          className={`bg-[${color}] h-[18px] w-[18px] rounded-circle mr-3 mt-1`}
        ></span>
        <aside>
          <h4 className="text-[16px]">{indicate}</h4>
          <p className="text-lighter-text text-sm">
            {amount} {desc}
          </p>
        </aside>
      </div>
    );
  });
    return(
        <section className="flex justify-between items-center px-5">
            <aside>
                <Stat />
            </aside>
            <aside>{data}</aside>
        </section>
    )
}