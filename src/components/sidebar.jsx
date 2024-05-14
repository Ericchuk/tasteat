import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context'
import {NavLink} from 'react-router-dom'

import Logo from './logo';
import '../styles/sidebar.css';
import home from '../assets/sidebar icons/Home.svg'
import discount from '../assets/sidebar icons/discount.svg'
import dashboard from '../assets/sidebar icons/dashboard.svg'
import notification from '../assets/sidebar icons/notification-bell.svg'
import order from '../assets/sidebar icons/order-icon.svg'
import customer from '../assets/sidebar icons/customer-red.svg'
import setting from '../assets/sidebar icons/setting.svg'
import logOut from '../assets/sidebar icons/log out.svg'

export default function Sidebar(){
     const {sidebarIcons,setSidebarIcons,change, checkIt} = useContext(AppContext);

    useEffect(() => {
        setSidebarIcons(location.pathname)
    },[sidebarIcons])

   
    

    const navItems = [
        {
            id:0,
            itemName:"/",
            itemImage:home,
        },
        {
            id:1,
            itemName:"/discount",
            itemImage:discount,
        },
        {
            id:2,
            itemName:"/dashboard",
            itemImage:dashboard,
        },
        {
            id:3,
            itemName:"/notification",
            itemImage:notification,
        },
        {
            id:4,
            itemName:"/order",
            itemImage:order,
        },
        {
            id:5,
            itemName:"/customer",
            itemImage:customer,
        },
        {
            id:6,
            itemName:"/setting",
            itemImage:setting,
        },
        {
            id:7,
            itemName:"/logOut",
            itemImage:logOut,
        },
    ]

    const navItem = navItems.map((item) => {
        return(
            <li key={item.id} className={`w-icons h-icons flex justify-center items-center ml-3 ${sidebarIcons === item.itemName ? 'bg-bg-color transition-colors': " "}`} onClick={checkIt()}>
                <NavLink to={item.itemName} className={`home h-icon w-icon rounded-lg flex flex-col justify-center items-center ${location.pathname === item.itemName ? 'rounded-lg bg-bg-icons transition-opacity drop-shadow-3xl' : " "} `} style={({ isActive }) =>
            isActive ? { backgroundColor: "rgb(234 115 109)", } : { backgroundColor: "transparent" }
          }>
                    <img src={item.itemImage} alt={item.itemName} className={`${sidebarIcons === item.itemName ? 'brightness-200' : ''}`} />
                </NavLink>
            </li>
        )
    })

    return(
        <nav className='nav relative bg-sidebar w-24 h-[123vh] flex justify-start items-center flex-col gap-y-2 py-5'>
            <Logo />
            <ul className='list-none flex flex-col items-between border-red'>
                {navItem}
            </ul>
        </nav>
    )
}