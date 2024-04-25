export default function DashboardStats({img,stat,indicators,figures,desc,alt1,alt2}){
    return(
        <section className="bg-sidebar rounded-lg p-4 h-36 w-[32%]">
            <aside className="flex justify-between items-center w-[120px] h-[39px]">
                <span className="bg-bg-color w-[38px] h-[38px] rounded-lg flex justify-center items-center">
                   <img src={img} alt={alt1} className="h-6 w-6" /> 
                </span>
                <small className={`mx-3 text-sm font-medium ${alt2 === "arrow-up" ? "text-[#50D1AA]" : "text-[#FF7CA3]"}`}>{stat}</small>
                <span className={`h-[18px] w-18px  rounded-[20px] px-2 py-3 flex justify-center items-center ${alt2 === "arrow-up" ? "bg-[#88e09159]" : "bg-[#ff647160]"}`}>
                   <img src={indicators} alt={alt2} className="h-2.5 w-2" />  
                </span>
            </aside>
            <h1 className="font-bold text-[28px] mt-3">{figures}</h1>
            <p className="text-sm font-medium text-lighter-text capitalize">{desc}</p>
        </section>
    )
}