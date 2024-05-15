import { useContext } from "react"
import { AppContext } from "../../context"

export default function DiscountedProducts() {
    const { withImage, addToCart } = useContext(AppContext);
    console.log(withImage)
    return (
        <section className='w-11/12 bg-bg-color p-6 flex pt-16'>
            
            {
                withImage.map((data, index) => {
                    const {
                        dishName,
                        dishPrice,
                        availability,
                        dishCategory,
                    discountAmount } = data.item.data;
                        const {url} = data.item2
                    return(
                        <section>
                            {
                        discountAmount ?
                        <aside key={index} className='relative flex flex-col justify-end items-center w-48 h-72 m-5 mb-10 bg-sidebar text-white rounded-xl  py-4'>
                            <img src={url} alt={dishName} className='rounded-circle absolute -top-10' />
                            <p className='text-center w-36 my-3'>{dishName}</p>
                            <div className="text-white font-semibold text-base w-[93px] h-[46px] bg-bg-icons flex justify-center items-center absolute top-[60px] left-0 rounded-br-2xl drop-shadow-3xl">
                                <p>{discountAmount}% off</p>
                            </div>
                            <p className='text-[#ABBBC2] text-sm'>${dishPrice}</p>
                            <p className="text-[#ABBBC2] text-sm">{availability} available</p>
                            <button className='bg-bg-icons p-3.5 text-white text-sm rounded-lg w-10/12 mt-3' onClick={() => addToCart(withImage[index])}>Order now</button>
                        </aside>
                        : ""
                    }
                        </section>
                    )
                })
            }

        </section>
    )
}