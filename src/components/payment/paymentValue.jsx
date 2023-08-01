export default function PaymentValue({label, type, placeholder}){
    return(
        <aside className="flex justify-start items-start flex-col">
            <label className="text-base text-white my-2 capitalize">{label}</label>
            <input type={type} placeholder={placeholder} className="h-12 w-full rounded-lg p-3.5 flex justify-center items-center outline-none bg-bg-color my-2 border border-line text-base" />
        </aside>
    )
}