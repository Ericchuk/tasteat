export default function SettingNavbar({navIcon, navName, description}){
    return(
        <section className="flex justify-start items-start p-6 pr-0 ">
            <img src={navIcon} alt={navName} className="h-4 w-4 invert brightness-0 mt-2 mr-3" />
            <nav>
                <h4 className="text-white capitalize">{navName}</h4>
                <p className="text-lighter-text">{description}</p>
            </nav>
        </section>
    )
}