import NotificationHead from "../notification/notificationHead";
import MenuNavbar from '../homeContent/navbar';
import AddOrEditDish from './addOrEdit dish';
import CartFooterButton from '../cartContent/cartFooterButton'

export default function ProductMangementContent(){
    return(
        <main className="bg-sidebar relative h-screen overflow-x-hidden overflow-y-scroll w-12/12 rounded-lg py-5">
          <NotificationHead
            headText="Product management"
            option1="Manage Categories"
            option2="manage outgoing orders"
          />
          <MenuNavbar />
          <AddOrEditDish />
          <aside className="w-12/12 px-6 relative">
            <footer className="mt-3 w-[60%]">
        <CartFooterButton button1="Discards Changes" button2="Save changes" />
      </footer>
          </aside>
          
        </main>
    )
}