import React, { useState, useLayoutEffect, useEffect } from "react";
import noodles from "./assets/landing page image/image 4 (3).png";
import pasta from "./assets/landing page image/image 4.png";
import dumpling from "./assets/landing page image/image 4 (1).png";
import spinach from "./assets/landing page image/image 4 (2).png";
import ugwu from "./assets/landing page image/Images.png";
import instantNoodles from "./assets/landing page image/image 4(1).png";
import eren from "./assets/landing page image/Avatar 1.svg";
import reiner from "./assets/landing page image/Avatar 1(1).svg";
import levi from "./assets/landing page image/Avatar 1(2).svg";
import historia from "./assets/landing page image/Avatar 1(3).svg";
import order from "./assets/sidebar icons/order-icon.svg";
import notification from "./assets/sidebar icons/notification-bell.svg";
import discount from "./assets/sidebar icons/discount.svg";
import security from "./assets/sidebar icons/padlock.svg";
import info from "./assets/sidebar icons/exclamation.svg";
import OrderSettings from "./components/settings/orderSetting";
import ProductMangementContent from "./components/settings/productManagementContent";
import SecurityContent from "./components/settings/securityContent";
import NotificationContent from "./components/settings/notificationSetting";
import ApperanceSetting from "./components/settings/appearanceSetting";
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { GoogleAuthProvider, getAuth, signInWithRedirect,getRedirectResult, signOut } from 'firebase/auth';
  import { getDatabase, ref, push } from 'firebase/database';
import { toast } from "react-toastify";

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
      discount: 0.2,
      category: 'Hot dishes'
    },
    {
      id: 1,
      dishImage: pasta,
      dishName: "Salted Pasta with mushroom sauce",
      price: 2.69,
      availability: "11 Bowls",
      orderQty: 1,
      discount:0.5,
      category: 'Cold dishes'
    },
    {
      id: 2,
      dishImage: dumpling,
      dishName: "Beef dumpling in hot and sour soup",
      price: 2.99,
      availability: "16 Bowls ",
      orderQty: 1,
      discount: 0.7,
      category: 'Hot dishes'
    },
    {
      id: 3,
      dishImage: ugwu,
      dishName: "Vegs spiced noodles submersed",
      price: 2.99,
      availability: "16 Bowls ",
      orderQty: 1,
      discount:0,
      category: 'Dessert'
    },
    {
      id: 4,
      dishImage: spinach,
      dishName: "Healthy noodle with spinach leaf",
      price: 3.29,
      availability: "22 Bowls ",
      orderQty: 1,
      discount:0,
      category: 'Hot dishes'
    },
    {
      id: 5,
      dishImage: spinach,
      dishName: "Hot spicy fried rice with omelet",
      price: 3.49,
      availability: "13 Bowls ",
      orderQty: 1,
      discount:0,
      category: 'Cold dishes'
    },
    {
      id: 6,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls ",
      orderQty: 1,
      discount:0,
      category: 'Dessert'
    },
    {
      id: 7,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls ",
      orderQty: 1,
      discount:0,
      category: 'Appetizer'
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
      totalPurchasePaid: "125",
      status: true,
      out: "true",
    },
    {
      id: 1,
      customer: "Orders #33212",
      customerName: "Reiner Braunn",
      customerImage: reiner,
      menu: "Salted pasta with mushroom sauce",
      totalPayment: 12.58,
      totalPurchasePaid: "145",
      status: false,
      out: "false",
    },
    {
      id: 2,
      customer: "Orders #32155",
      customerName: "Levi Ackerman",
      customerImage: levi,
      menu: "Beef dumpling in hot and sour soup",
      totalPayment: 10.58,
      totalPurchasePaid: "105",
      status: true,
      out: "false",
    },
    {
      id: 3,
      customer: "Orders #34562",
      customerName: "Historia Reiss",
      customerImage: historia,
      menu: "Hot spicy frieed rice with omelet",
      totalPayment: 20.58,
      totalPurchasePaid: "45",
      status: true,
      out: "true",
    },
    {
      id: 4,
      customer: "Orders #33212",
      customerName: "Hanji Zoe",
      customerImage: reiner,
      menu: "Hot spicy frieed rice with omelet",
      totalPayment: 12.58,
      totalPurchasePaid: "245",
      status: true,
      out: "true",
    },
    {
      id: 5,
      customer: "Orders #32155",
      customerName: "Armia Arkert",
      customerImage: levi,
      menu: "Hot spicy frieed rice with omelet",
      totalPayment: 10.58,
      totalPurchasePaid: "435",
      status: true,
      out: "true",
    },
  ]);

  const [datas, setDatas] = useState([
    {
      id: 0,
      indicate: "Pending",
      color: "#9290FE",
      amount: 200,
      desc: "orders",
    },
    {
      id: 1,
      indicate: "Preparing",
      color: "#FFB572",
      amount: 122,
      desc: "customers",
    },
    {
      id: 2,
      indicate: "Delivered",
      color: "#50D1AA",
      amount: 264,
      desc: "dishes",
    },
  ]);

  const [mostOrderedFood, setMostOrderedFood] = useState([
    {
      id: 0,
      dish: "spicy seasoned seafood noodles",
      dishImage: noodles,
      orders: "200 dishes ordered",
    },
    {
      id: 1,
      dish: "Salted pasta with mushroom sauce",
      dishImage: pasta,
      orders: "120 dishes ordered",
    },
    {
      id: 2,
      dish: "Beef dumpling in hot and sour soup",
      dishImage: noodles,
      orders: "50 dishes ordered",
    },
  ]);
  const [proceed, setProceed] = useState(false);
  const [payment, setPayment] = useState(false);

  const [navItems, setNavItems] = useState([
    {
      id: 0,
      itemName: "Hot dishes"
    },
    {
      id: 1,
      itemName: "Cold dishes"
    },
    {
      id: 2,
      itemName: "Soup"
    },
    {
      id: 3,
      itemName: "Grill"
    },
    {
      id: 4,
      itemName: "Appetizer"
    },
    {
      id: 5,
      itemName: "Dessert"
    },
  ])

  const [settingBarItems, setSettingBarItems] = useState([
    {
      id: 0,
      navIcon: order,
      navName: "orders",
      desc: "Your previous orders",
      component:<OrderSettings />,
    },
    {
      id: 1,
      navIcon: notification,
      navName: "notification",
      desc: "Customize your notification",
      component:<NotificationContent />,
    },
    {
      id: 2,
      navIcon: discount,
      navName: "Product management",
      desc: "manage your product, pricing etc",
      component:<ProductMangementContent />,
    },
    {
      id: 3,
      navIcon: security,
      navName: "security",
      desc: "configure password,pin, etc",
      component:<SecurityContent />,
    },
    {
      id: 4,
      navIcon: info,
      navName: "about us",
      desc: "find out more about posty",
      component:<ApperanceSetting />,
    },
  ])
  const [total,setTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [showSetting, setShowSetting] = useState(0)
   const [gmailOfUsers, setGmailOfUsers] = useState([]);
   const [authenticated, setAuthenticated] = useState(null);
   const [usera, setUser] = useState([]);
   const [newItem, setNewItem] = useState(false);
  //  const [dishesData] = useState([]);
 

  // change showSetting function to display each component
  function changeShowSetting(item){
    setShowSetting(item.id)

  }

  const [onBar, setOnBar] = useState('Hot dishes')

  //change onBar function

  function changeOnBar(item) {
    setOnBar(item.itemName)
  }


  // get the total amount of item purchased
  useEffect(() => {
    let total = 0;
    orderItems.forEach((item) => {
      total += item.price ;
      setTotal(total)
    })

    let discount = 0;
    orderItems.forEach((item) => {
      discount += item.discount;
      setDiscountTotal(discount)
    })
  }, [ orderItems])

  useLayoutEffect(() => {
    {
      location.pathname === "/dashboard" || location.pathname === "/setting" || location.pathname === "/order"
        ? setRemoveCart(true)
        : setRemoveCart(false);
    }
  });

  //check if item is in cart already
  const [inCart, setInCart] = useState(true)

  function addToCart(item) {
    if (orderItems.some((cart) => cart.id === item.id)) {
      setInCart(false);
    } else {
      setOrderItems([...orderItems, item]);
      setInCart(true);
      console.log(orderItems.some((cart) => cart.id === item.id));
    }
  }

  function removeFromCart(itemId) {
    setOrderItems(orderItems.filter((item) => item.id !== itemId))
    console.log(itemId)
  }

  // cart buttons function 
  function closeCart() {
    setOpenCart(!openCart);
    setProceed(false)
  }

  function showPayment() {
    setProceed(true)
    setOpenCart(false);
  }

  function confirmPayment() {
    setPayment(true)
  }

  function cancelPayment() {
    setPayment(false)
  }
  function cancelLocation() {
    setPayment(false)
  }


  function change(item) {
    setSidebarIcons(location.pathname);
    {
      item.itemName === "/dashboard" || item.itemName === "/setting" || location.pathname === "/order"
        ? setRemoveCart(true)
        : setRemoveCart(false);
    }
  }

  function scrollFunc() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleBoxToCreateNewItem(){
    setNewItem(!newItem)
  }


  // function calls for firebase 
const signIn = (e) => {
  e.preventDefault();
  signInWithRedirect(auth, provider);
};

const logOut = (e) => {
  e.preventDefault();
 auth.signOut().then(() => {
    // Sign-out successful.
    setAuthenticated(false)
    console.log("eee")
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

  // firebase for signin in 
  // configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeUWwfQTuU0e19mfj9Ry2jo_QJYXPqsq0",
  authDomain: "restuarantdatabase-6be7d.firebaseapp.com",
  projectId: "restuarantdatabase-6be7d",
  storageBucket: "restuarantdatabase-6be7d.appspot.com",
  messagingSenderId: "570133232909",
  appId: "1:570133232909:web:9873018ddbf3ca6108c444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider =new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase();


useEffect(() => {
  getRedirectResult(auth)
  .then((result) => {
    if(result){
      setAuthenticated(true)
      setGmailOfUsers([...gmailOfUsers, usera]);
      console.log("result")
    }else{
      console.log("user not signed in")
    }
  }).catch((error) => {
    // Handle Errors here.
    console.log(error)
    setAuthenticated(false)
  });
}, [])


// function to push item to  database 
const initialValues = {
  dishName:"",
  dishPrice:0,
  dishCategory:"Hot dishes",
  discountAmount:0,
  dishRange:"Cheaper",
  iAvailable:0,
}

const [dishDetails, setDishDetails] = useState(initialValues)
const [data, setData] = useState({});
const { dishName, discountAmount, dishPrice, dishImage, dishCategory, dishRange, iAvailable} = dishDetails
letgit add .
git c id = 0;


  // handle form input 
  function handleInputChange(e){
    const {name, value} = e.target;
    setDishDetails({...dishDetails, [name]:value})
  }

  const reference = ref(db, `subDishesData`);


  function submit(e){
    id++
    e.preventDefault();
    if(!dishName || !dishPrice || !discountAmount || !iAvailable || !dishCategory || !dishRange || !dishImage){
     console.log(`error`)
     toast.error("Please provide a valid input")
    }else{
      push(reference, {
        id: id,
        dishName: dishName,
        dishPrice: dishPrice,
        dishImage : dishImage,
        availability: iAvailable,
        discountAmount:discountAmount,
        dishCategory:dishCategory,
        dishRange: dishRange,
      });
      // setNewItem(false)
      console.log(dishDetails)
    }
  }



useLayoutEffect(() => {
  auth.onAuthStateChanged((user) =>{
    if(user){
      const {displayName,email,photoURL} = user;
      setUser(...usera, {displayName,email,photoURL})
    }
  })
}, [])



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
        datas,
        mostOrderedFood,
        proceed,
        setProceed,
        payment,
        setPayment,
        showPayment,
        confirmPayment,
        cancelPayment,
        cancelLocation,
        navItems,
        onBar,
        setOnBar,
        changeOnBar,
        settingBarItems,
        setSettingBarItems,
        changeShowSetting,
        showSetting,
        scrollFunc,
        total,
        discountTotal,
        signIn,
        gmailOfUsers,
        authenticated,
        usera,
        logOut,
        newItem,
        setNewItem,
        toggleBoxToCreateNewItem,
        handleInputChange,
        submit,
        dishPrice,
        dishRange,
        dishCategory,
        dishImage,
        discountAmount,
        iAvailable
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
