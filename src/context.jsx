import React, { useState, useEffect } from "react";
import noodles from "./assets/landing page image/image 4 (3).png";
import pasta from "./assets/landing page image/image 4.png";
import dumpling from "./assets/landing page image/image 4 (1).png";
import spinach from "./assets/landing page image/image 4 (2).png";
import instantNoodles from "./assets/landing page image/image 4(1).png";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [dishes, setDishes] = useState([
    {
      id: 0,
      dishImage: noodles,
      dishName: "Spicy seasoned seafood noodles",
      price: 2.29,
      availability: "20 Bowls available",
      orderQty: 1,
    },
    {
      id: 1,
      dishImage: pasta,
      dishName: "Salted Pasta with mushroom sauce",
      price: 2.69,
      availability: "11 Bowls available",
      orderQty: 1,
    },
    {
      id: 2,
      dishImage: dumpling,
      dishName: "Beef dumpling in hot and sour soup",
      price: 2.99,
      availability: "16 Bowls available",
      orderQty: 1,
    },
    {
      id: 3,
      dishImage: dumpling,
      dishName: "Beef dumpling in hot and sour soup",
      price: 2.99,
      availability: "16 Bowls available",
      orderQty: 1,
    },
    {
      id: 4,
      dishImage: spinach,
      dishName: "Healthy noodle with spinach leaf",
      price: 3.29,
      availability: "22 Bowls available",
      orderQty: 1,
    },
    {
      id: 5,
      dishImage: spinach,
      dishName: "Hot spicy fried rice with omelet",
      price: 3.49,
      availability: "13 Bowls available",
      orderQty: 1,
    },
    {
      id: 6,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls available",
      orderQty: 1,
    },
    {
      id: 7,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls available",
      orderQty: 1,
    },
  ]);

  const [openCart, setOpenCart] = useState(false);
  const [orderItems, setOrderItems] = useState([]);



  function addToCart(item) {
    setOrderItems([...orderItems, item]);
    
  }

  function removeFromCart(item){
    orderItems.filter((index) => index.id === item.id)
  }

  function closeCart() {
    setOpenCart(!openCart);
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
        removeFromCart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
