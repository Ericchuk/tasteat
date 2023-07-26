import logo from '../assets/logo/logo.svg'

export default function Logo(){
    return(
        <a href="#" className="flex w-logo h-logo p-1 mb-1 items-center justify-center text-center rounded-xl bg-[#eb956a62]">
            <li className="list-none w-11 h-11 text-center flex flex-col items-center justify-center">
                <img src={logo} alt="logo"/>
            </li>
        </a>
    )
}