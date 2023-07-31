import Header from '../homeContent/header';
import MenuNavbar from '../homeContent/navbar';
import DishSelect from '../homeContent/dishSelect'
import DiscountedProducts from './discountedProducts';

export default function DiscountPage(){
    return(
        <section className='w-11/12 bg-bg-color p-6'>
            <Header headText="Riverside flamez - discount sales %"/>
            <MenuNavbar />
            <DishSelect />
            <DiscountedProducts />
        </section>
    )
}