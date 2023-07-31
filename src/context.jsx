import React, { useState, useLayoutEffect } from "react";
import noodles from "./assets/landing page image/image 4 (3).png";
import pasta from "./assets/landing page image/image 4.png";
import dumpling from "./assets/landing page image/image 4 (1).png";
import spinach from "./assets/landing page image/image 4 (2).png";
import instantNoodles from "./assets/landing page image/image 4(1).png";
import eren from "./assets/landing page image/Avatar 1.svg";
import reiner from "./assets/landing page image/Avatar 1(1).svg";
import levi from "./assets/landing page image/Avatar 1(2).svg";
import historia from "./assets/landing page image/Avatar 1(3).svg";
import hanji from "./assets/landing page image/Avatar 1(4).svg";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [removeCart, setRemoveCart] = useState(false);
  const [sidebarIcons, setSidebarIcons] = useState("/home");
  const [dishes, setDishes] = useState([
    {
      id: 0,
      dishImage: noodles,
      dishName: "Spicy seasoned seafood noodles",
      price: 2.29,
      availability: "20 Bowls",
      orderQty: 1,
    },
    {
      id: 1,
      dishImage: pasta,
      dishName: "Salted Pasta with mushroom sauce",
      price: 2.69,
      availability: "11 Bowls",
      orderQty: 1,
    },
    {
      id: 2,
      dishImage: dumpling,
      dishName: "Beef dumpling in hot and sour soup",
      price: 2.99,
      availability: "16 Bowls ",
      orderQty: 1,
    },
    {
      id: 3,
      dishImage: dumpling,
      dishName: "Beef dumpling in hot and sour soup",
      price: 2.99,
      availability: "16 Bowls ",
      orderQty: 1,
    },
    {
      id: 4,
      dishImage: spinach,
      dishName: "Healthy noodle with spinach leaf",
      price: 3.29,
      availability: "22 Bowls ",
      orderQty: 1,
    },
    {
      id: 5,
      dishImage: spinach,
      dishName: "Hot spicy fried rice with omelet",
      price: 3.49,
      availability: "13 Bowls ",
      orderQty: 1,
    },
    {
      id: 6,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls ",
      orderQty: 1,
    },
    {
      id: 7,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls ",
      orderQty: 1,
    },
  ]);

  const [openCart, setOpenCart] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [notificationOrder, setOrderInNotification] = useState([
    {
      id: 0,
      customer: "Orders #34562",
      customerName: "Eren Jaegar",
      customerImage: eren,
      menu: "spicy seasoned seafood noodles",
      totalPayment: 20.58,
      totalPurchasePaid:"125",
      status: true,
      out:"true"
    },
    {
      id: 1,
      customer: "Orders #33212",
      customerName: "Reiner Braunn",
      customerImage: reiner,
      menu: "Salted pasta with mushroom sauce",
      totalPayment: 12.58,
      totalPurchasePaid:"145",
      status: false,
      out:"false"
    },
    {
      id: 2,
      customer: "Orders #32155",
      customerName: "Levi Ackerman",
      customerImage: levi,
      menu: "Beef dumpling in hot and sour soup",
      totalPayment: 10.58,
      totalPurchasePaid:"105",
      status: true,
      out:"false"
    },
    {
      id: 3,
      customer: "Orders #34562",
      customerName: "Historia Reiss",
      customerImage: historia,
      menu: "Hot spicy frieed rice with omelet",
      totalPayment: 20.58,
      totalPurchasePaid:"45",
      status: true,
      out:"true"
    },
    {
      id: 4,
      customer: "Orders #33212",
      customerName: "Hanji Zoe",
      customerImage: reiner,
      menu: "Hot spicy frieed rice with omelet",
      totalPayment: 12.58,
      totalPurchasePaid:"245",
      status: true,
      out:"true"
    },
    {
      id: 5,
      customer: "Orders #32155",
      customerName: "Armia Arkert",
      customerImage: levi,
      menu: "Hot spicy frieed rice with omelet",
      totalPayment: 10.58,
      totalPurchasePaid:"435",
      status: true,
      out:"true"
    },
  ]);
  
  const [datas, setDatas] = useState([
    {
        id:0,
        indicate:"Pending",
        color:"#9290FE",
        amount:200,
        desc:"orders"
    },
    {
        id:1,
        indicate:"Preparing",
        color:"#FFB572",
        amount:122,
        desc:"customers"
    },
    {
        id:2,
        indicate:"Delivered",
        color:"#50D1AA",
        amount:264,
        desc:"dishes"
    },
])

const data = datas.map((item) => {
  const {color,id,indicate,amount,desc} = item;
  return(
      <div key={id} className="flex justify-start items-start mt-5">
          <span className={`bg-[${color}] h-[18px] w-[18px] rounded-circle mr-3 mt-1`}></span>
          <aside>
              <h4 className="text-[16px]">{indicate}</h4>
              <p className="text-lighter-text text-sm">{amount} {desc}</p>
          </aside>
      </div>
  )})

  useLayoutEffect(() => {
    {
      location.pathname === "/dashboard" || location.pathname === "/setting"
        ? setRemoveCart(true)
        : setRemoveCart(false);
    }
  });

  function addToCart(item) {
    setOrderItems([...orderItems, item]);
  }

  function removeFromCart(item) {
    orderItems.filter((index) => index.id === item.id);
  }

  function closeCart() {
    setOpenCart(!openCart);
  }

  function change(item) {
    setSidebarIcons(location.pathname);
    {
      item.itemName === "/dashboard" || item.itemName === "/setting"
        ? setRemoveCart(true)
        : setRemoveCart(false);
    }
  }
  return (
    <AppContext.Provider
      value={{
        dishes,
        setDishes,
        openCart,
        setOpenCart,
        closeCart,
        orderItems,
        setOrderItems,
        addToCart,
        removeFromCart,
        notificationOrder,
        removeCart,
        change,
        sidebarIcons,
        setSidebarIcons,
        data,
        datas
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
