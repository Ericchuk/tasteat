import {useContext} from 'react'
import {AppContext } from '../../context';
export default function Stat() {
    const {datas} = useContext(AppContext);
  return (
    <section className="relative">
      <div className="outer-circle h-[185px] w-[185px] py-[13px] px-3 rounded-circle">  
        {console.log(datas[0].color)}
      </div>
        {/* circle1 */}
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="185px" height="185px" className="absolute z-10 top-0 left-0">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="92.5" cy="92.5" r="86" stroke-linecap="round" stroke-dashoffset={datas[2].amount} className="circle1 fill-none stroke-[#50D1AA]  stroke-[12px]" />
      </svg>
      {/* circle underneath circle 1  */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="185px" height="185px" className="absolute z-0 top-0 left-0">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="92.5" cy="92.5" r="86" stroke-linecap="round" className="circle1 fill-none stroke-[#252836]  stroke-[12px]" />
      </svg>
        {/* circle 2 */}
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="170px" height="170px" className="absolute top-2 left-2">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="85" cy="85" r="74" stroke-linecap="round" stroke-dashoffset={datas[1].amount} className="circle2 fill-none  stroke-[#FFB572] stroke-[12px]" />
      </svg>

        {/* circle 3 */}
       <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="absolute z-10 top-[13px] left-[13px]">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="63" stroke-linecap="round" stroke-dashoffset={392-200} className="circle3 fill-none stroke-[#9290FE] stroke-[12px]" />
      </svg>

        {/* circle underneath circle 3 */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className="absolute z-0 top-[13px] left-[13px]">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="63" stroke-linecap="round" className="circle3 fill-none stroke-[#252836] stroke-[12px]" />
      </svg>

        {/* circle 4  */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="140px" height="140px" className="absolute top-[23.1px] left-[23px]">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="70" cy="70" r="51" stroke-linecap="round" className="fill-none stroke-[#1F1D2B] stroke-[12px]" />
      </svg>

        {/* circle 5 (filled)  */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="140px" height="140px" className="absolute top-[23.1px] left-[23px]">
        <defs>
            <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
        </defs>
        <circle cx="70" cy="70" r="45" stroke-linecap="round" className="fill-[#252836]" />
      </svg>
    </section>
  );
}
