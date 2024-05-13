import { useContext } from "react";
import { AppContext } from "../../context";
import MostOrdered from "../dashboard/mostOrdered";
import MostOrderedContent from "../dashboard/mostOrderedConent";
import UserOrderHistory from "./userOrderHistory";
import UserProfileDetails from "./userProfileDetails";

export default function UserLoggedIn() {

  const {userMailAddresses, usera} = useContext(AppContext)
  console.log(userMailAddresses)
  return (
    <section>
      <aside className="flex justify-between mb-5">
        <UserProfileDetails />
        <div className="bg-sidebar w-[430px] rounded-lg p-6">
          <MostOrdered headerText="most ordered" />
          <MostOrderedContent />
        </div>
      </aside>
      <aside className=" rounded border">
        {userMailAddresses.map((item) => {
          if(usera.displayName !== item?.data?.displayName){
            ""
          }else{
            return <UserOrderHistory />
          }
         }
      )
        }
      </aside>
    </section>
  );
}
