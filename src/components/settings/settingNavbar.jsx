import { useContext } from "react"
import { AppContext } from "../../context"

export default function SettingNavbar() {

    const { settingBarItems, changeShowSetting, showSetting } = useContext(AppContext);

    const settingBarItem = settingBarItems.map((item) => {
        const {id,navIcon,navName,desc} = item;
        return(
            <section key={id} onClick={() => changeShowSetting(item)} className={`flex justify-start items-start p-6 pr-0 cursor-pointer  ${item.id === showSetting ? "  bg-[#ea736d57]" : "bg-sidebar"}`}>
            <img src={navIcon} alt={navName} className="h-4 w-4 cur invert brightness-0 mt-2 mr-3" />
            <nav>
                <h4 className={` capitalize font-semibold ${item.id === showSetting ? "  text-bg-icons" : "text-white"}`}>{navName}</h4>
                <p className={`${item.id === showSetting ? "  text-bg-icons" : "text-lighter-text"}`}>{desc}</p>
            </nav>
        </section>
        )
    })
    return (
        <section>
            {settingBarItem}
        </section>
        
    )
}