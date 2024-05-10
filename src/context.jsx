import React, { useState, useLayoutEffect, useEffect } from "react";
import { toast } from "react-toastify";
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
import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  getRedirectResult,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, push, onValue, set } from "firebase/database";
import {
  getStorage,
  ref as sRef,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";

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
      category: "Hot dishes",
    },
    {
      id: 1,
      dishImage: pasta,
      dishName: "Salted Pasta with mushroom sauce",
      price: 2.69,
      availability: "11 Bowls",
      orderQty: 1,
      discount: 0.5,
      category: "Cold dishes",
    },
    {
      id: 2,
      dishImage: dumpling,
      dishName: "Beef dumpling in hot and sour soup",
      price: 2.99,
      availability: "16 Bowls ",
      orderQty: 1,
      discount: 0.7,
      category: "Hot dishes",
    },
    {
      id: 3,
      dishImage: ugwu,
      dishName: "Vegs spiced noodles submersed",
      price: 2.99,
      availability: "16 Bowls ",
      orderQty: 1,
      discount: 0,
      category: "Dessert",
    },
    {
      id: 4,
      dishImage: spinach,
      dishName: "Healthy noodle with spinach leaf",
      price: 3.29,
      availability: "22 Bowls ",
      orderQty: 1,
      discount: 0,
      category: "Hot dishes",
    },
    {
      id: 5,
      dishImage: spinach,
      dishName: "Hot spicy fried rice with omelet",
      price: 3.49,
      availability: "13 Bowls ",
      orderQty: 1,
      discount: 0,
      category: "Cold dishes",
    },
    {
      id: 6,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls ",
      orderQty: 1,
      discount: 0,
      category: "Dessert",
    },
    {
      id: 7,
      dishImage: instantNoodles,
      dishName: "Spicy instant noodle with special omelette",
      price: 3.59,
      availability: "17 Bowls ",
      orderQty: 1,
      discount: 0,
      category: "Appetizer",
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
      itemName: "Hot dishes",
    },
    {
      id: 1,
      itemName: "Cold dishes",
    },
    {
      id: 2,
      itemName: "Soup",
    },
    {
      id: 3,
      itemName: "Grill",
    },
    {
      id: 4,
      itemName: "Appetizer",
    },
    {
      id: 5,
      itemName: "Dessert",
    },
  ]);

  const options = [
    {
      id: 0,
      option: "Cheaper",
    },
    {
      id: 1,
      option: "Mid-Range",
    },
    {
      id: 2,
      option: "Luxury",
    },
  ];

  const [settingBarItems, setSettingBarItems] = useState([
    {
      id: 0,
      navIcon: order,
      navName: "orders",
      desc: "Your previous orders",
      component: <OrderSettings />,
    },
    {
      id: 1,
      navIcon: notification,
      navName: "notification",
      desc: "Customize your notification",
      component: <NotificationContent />,
    },
    {
      id: 2,
      navIcon: discount,
      navName: "Product management",
      desc: "manage your product, pricing etc",
      component: <ProductMangementContent />,
    },
    {
      id: 3,
      navIcon: security,
      navName: "security",
      desc: "configure password,pin, etc",
      component: <SecurityContent />,
    },
    {
      id: 4,
      navIcon: info,
      navName: "about us",
      desc: "find out more about posty",
      component: <ApperanceSetting />,
    },
  ]);
  const [total, setTotal] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);
  const [showSetting, setShowSetting] = useState(0);
  const [gmailOfUsers, setGmailOfUsers] = useState([]);
  const [authenticated, setAuthenticated] = useState(null);
  const [usera, setUser] = useState([]);
  const [newItem, setNewItem] = useState(false);
  const [windowSize, setWindowSize] = useState(false);
  const [searchText, setSearchText] = useState();
  const [filteredItems, setFIlteredItems] = useState([]);
  const [display, setDisplay] = useState(false);
  const [onBar, setOnBar] = useState("Hot dishes");
  const [dashboardDish, setDashboardDish] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState("Cheaper");
  const [notificationFilter, setNotificationFilter] =
    useState("Filter options");
  const [inCart, setInCart] = useState(true);
  const [location, setLocation] = useState([]);
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [cvv, setCvv] = useState();
  const [deliveryAddress, setDeliveryAddress] = useState();
  const [deliveryNote, setDeliveryNote] = useState();
  const [orderQty, setOrderQty] = useState(1);
  const [imageUrl, setImageUrl] = useState([]);
  const [retrieved, setRetrieved] = useState([]);
  const [userMailAddresses, setUserMailAddress] = useState([]);

  // cart quantity
  function setQty(e, item) {
    orderItems.map((data) => {
      data.id === item ? console.log(item) : console.log(data);
    });
    // setOrderQty(e.target.value)
  }
  // get card detail

  function cardNameFunc(e) {
    setCardName(e.target.value);
  }
  function cardNumberFunc(e) {
    setCardNumber(e.target.value);
  }
  function cvvFunc(e) {
    setCvv(e.target.value);
  }
  function expiryFunc(e) {
    setExpiryDate(e.target.value);
  }
  function deliveryAddFunc(e) {
    setDeliveryAddress(e.target.value);
  }
  function deliveryNoteFunc(e) {
    setDeliveryNote(e.target.value);
  }

  const customerDetails = {
    cardName: cardName,
    cardNumber: cardNumber,
    cvv: cvv,
    deliveryAddress: deliveryAddress,
    deliveryNote: deliveryNote,
    expiryDate: expiryDate,
  };

  function makePayment() {
    console.log(customerDetails);
  }

  // location fetching function not fixed
  function getLocation() {
    //   useEffect(() => {
    //     if(navigator.geolocation){
    //       navigator.geolocation.getCurrentPosition((position) => {
    //     setLocation({
    //       latitude:position.coords.latitude,
    //       longitude:position.coords.longitude
    //     })
    //   })
    //     }else{
    //       console.error(error)
    //     }
    //   }, [])
    //   console.log(location)
  }

  // change showSetting function to display each component
  function changeShowSetting(item) {
    setShowSetting(item.id);
  }

  //change onBar function

  function changeOnBar(item) {
    setOnBar(item.itemName);
    setDisplay(false);
  }

  // filter items by the amount to find which is cheaper, mid range and luxury

  function changeFilter(item) {
    setFilterByPrice(item.target.value);
    setDisplay(false);
  }

  // search box  function

  function searchItems(e) {
    setSearchText(e.target.value);
    let filteredItems = [];
    for (let i = 0; i < dishes.length; i++) {
      const dishName = dishes[i].dishName.toLowerCase();
      if (dishName.includes(searchText)) {
        filteredItems.push(dishes[i]);
        setDisplay(true);
      } else setDisplay(false);
    }
    setFIlteredItems(filteredItems);
  }

  // filter notifications

  function filterNotification(item) {
    setNotificationFilter(item.target.value);
  }

  // get the total amount of item purchased
  useEffect(() => {
    let total = 0;
    orderItems.forEach((item) => {
      total += item.price;
      setTotal(total);
    });

    let discount = 0;
    orderItems.forEach((item) => {
      discount += item.discount;
      setDiscountTotal(discount);
    });
  }, [orderItems]);

  useEffect(() => {
    {
      window.location.pathname === "/dashboard" ||
      window.location.pathname === "/setting" ||
      window.location.pathname === "/order" ||
      window.location.pathname === "/customer" ||
      window.location.pathname === "/notification" ||
      window.location.pathname === "/logOut"
        ? setRemoveCart(true)
        : setRemoveCart(false);
    }

    {
      screen.width < 1200 ? setWindowSize(false) : setWindowSize(true);
    }
  }, [removeCart]);
  //check if item is in cart already

  function addToCart(item) {
    if (orderItems.some((cart) => cart.id === item.id)) {
      setInCart(false);
    } else {
      setOrderItems([...orderItems, item]);
      setInCart(true);
      console.log(orderItems.some((cart) => cart.id === item.id));
    }
    toast("Added to cart");
  }

  function removeFromCart(itemId) {
    setOrderItems(orderItems.filter((item) => item.id !== itemId));
    toast("Removed from cart");
  }

  // cart buttons function
  function closeCart() {
    setOpenCart(!openCart);
    setProceed(false);
  }

  function showPayment() {
    {
      orderItems < 1 ? setProceed(false) : setProceed(true);
    }

    setOpenCart(false);
  }

  function confirmPayment() {
    setPayment(true);
  }

  function cancelPayment() {
    setPayment(false);
  }
  function cancelLocation() {
    setPayment(false);
  }

  function change(item) {
    setSidebarIcons(location.pathname);
    {
      item.itemName === "/dashboard" ||
      item.itemName === "/setting" ||
      item.itemName === "/order" ||
      item.itemName === "/customer" ||
      item.itemName === "/notification"
        ? setRemoveCart(true)
        : setRemoveCart(false);
    }
  }

  function scrollFunc() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleBoxToCreateNewItem() {
    setNewItem(!newItem);
  }

  // function calls for firebase
  const signIn = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider);
  };

  const logOut = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        setAuthenticated(false);
        toast("Logged out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // firebase for signin in
  // configuration

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCeUWwfQTuU0e19mfj9Ry2jo_QJYXPqsq0",
    authDomain: "restuarantdatabase-6be7d.firebaseapp.com",
    databaseURL: "https://restuarantdatabase-6be7d-default-rtdb.firebaseio.com",
    projectId: "restuarantdatabase-6be7d",
    storageBucket: "restuarantdatabase-6be7d.appspot.com",
    messagingSenderId: "570133232909",
    appId: "1:570133232909:web:9873018ddbf3ca6108c444",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const db = getDatabase();
  const storage = getStorage(app);
  const [imageToStorage, setImageToStorage] = useState("");

  // let userEmailAddress

  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          setAuthenticated(true);
        } else {
          console.log("user not signed in");
          console.log(usera);
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        setAuthenticated(false);
      });
  }, [authenticated]);

  useLayoutEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setUser(...usera, { displayName, email, photoURL });
      }
    });
  }, []);

  // function to push item to  database
  const initialValues = {
    dishName: "",
    dishPrice: 0,
    dishCategory: onBar,
    discountAmount: 0,
    dishRange: filterByPrice,
    iAvailable: 0,
    ids: 0,
  };

  const [dishDetails, setDishDetails] = useState(initialValues);

  const {
    dishName,
    discountAmount,
    dishPrice,
    dishCategory,
    dishRange,
    iAvailable,
  } = dishDetails;

  // handle form input
  function handleInputChange(e) {
    const { name, value } = e.target;
    setDishDetails({ ...dishDetails, [name]: value });
  }

  function handleImageUpload(e) {
    setImageToStorage(e.target.files[0]);
  }

  //fetching the image and datas

  const reference1 = ref(db, `subDishesData`);

  function submit(e) {
    e.preventDefault();
    const alphabetMatch = /[a-zA-Z]+$/;
    const numericMatch = /[0-9]/;

    if (
      alphabetMatch.test(dishName) &&
      dishName !== "" &&
      dishPrice !== "" &&
      dishPrice !== 0 &&
      numericMatch.test(dishPrice) &&
      iAvailable !== "" &&
      iAvailable !== 0 &&
      numericMatch.test(iAvailable) &&
      imageToStorage !== null
    ) {
      //image function
      const imgRef = sRef(storage, `files/${dishName}`);
      uploadBytes(imgRef, imageToStorage).then((value) => {
        getDownloadURL(value.ref).then((url) => {
          let key = value.name;
          setImageUrl((data) => [{ key, url }, ...data]);
        });
      });

      push(reference1, {
        dishName: dishName,
        dishPrice: dishPrice,
        availability: iAvailable,
        discountAmount: discountAmount,
        dishCategory: dishCategory,
        dishRange: dishRange,
      });
      toast("Added to database");
    } else {
      // setNewItem(false)
      toast("Enter the appropriate values");
    }

    setDishDetails(initialValues);
    setImageToStorage(" ");
  }

  useEffect(() => {
    listAll(sRef(storage, `files`)).then((imageToStorage) => {
      imageToStorage.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          let key = val.name;
          setImageUrl((data) => [...data, { key, url }]);
        });
      });
    });

    const detailRef = ref(db, `subDishesData`);
    onValue(detailRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        records.push({ key: childKey, data: childData });
      });
      setRetrieved(records);
    });

    // fetch email address to check if the user email is already in the database

    const emailRef = ref(db, "userEmail");
    onValue(emailRef, (snapshot) => {
      let emailAddresses = [];
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        emailAddresses.push({ key: childKey, data: childData });
      });
      setUserMailAddress(emailAddresses);
    });
  }, []);

  // push items from subdishes to main dish
  const reference2 = ref(db, `mainDishesToOrderFrom`);
  function pushToOrderBoard() {
    push(reference2, retrieved);

  }

  // creating a list of emails and storing in the database
  const reference3 = ref(db, "userEmail");
  function pushToUserAddress() {
    push(reference3, usera);
  }

  // automatically sending the item to the database upon entry

  useEffect(() => {
    userMailAddresses.map((item) => {
      if (item.data.email === usera.email) {
        return
      } else {
        pushToUserAddress();
      }
    });
  }, [authenticated]);


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
        discountAmount,
        iAvailable,
        windowSize,
        imageToStorage,
        setImageToStorage,
        handleImageUpload,
        filterByPrice,
        changeFilter,
        options,
        searchItems,
        filteredItems,
        display,
        notificationFilter,
        filterNotification,
        getLocation,
        location,
        cardNameFunc,
        makePayment,
        cardName,
        orderQty,
        setQty,
        cardNumber,
        expiryDate,
        cvv,
        deliveryAddress,
        deliveryNote,
        cardNumberFunc,
        cvvFunc,
        expiryFunc,
        deliveryAddFunc,
        deliveryNoteFunc,
        retrieved,
        imageUrl,
        pushToOrderBoard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
