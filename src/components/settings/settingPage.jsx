import SettingNavbar from "./settingNavbar";
import { useContext } from "react";
import { AppContext } from "../../context";

export default function SettingsPage() {
  const {settingBarItems,showSetting} = useContext(AppContext);

  return (
    <section className="w-full bg-bg-color py-5 px-6">
      <h2 className="font-universal text-heading font-semibold text-white mb-3 ">
        Settings
      </h2>
      <section className="flex justify-between">
        <aside className="bg-sidebar w-6/12 mr-7 rounded-lg min-h-screen ">
          <SettingNavbar />
        </aside>
        <aside className="bg-sidebar w-full">
          {settingBarItems[showSetting].component}
        </aside>
      </section>
     
      
      
    </section>
  );
}
