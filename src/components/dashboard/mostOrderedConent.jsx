export default function MostOrderedContent({dish,orders,dishImage}){
    return(
        <section className="flex justify-start items-center mt-5 px-5">
            <img src={dishImage} alt={dish} className="rounded-circle mr-6 h-14 w-[61px]"/>
            <aside>
                <h4  className="text-base capitalize">{dish}</h4>
                <p className="text-sm text-lighter-text">{orders}</p>
            </aside>
        </section>
    )
}