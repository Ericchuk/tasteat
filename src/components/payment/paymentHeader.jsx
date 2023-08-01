export default function Header({headText, headerDescription}){
    return(
        <header className="border-b pb-5 border-line">
            <h3 className="font-semibold text-3xl text-white my-2">{headText}</h3>
            <p className="text-lighter-text">{headerDescription}</p>
        </header>
    )
}