import {  AiFillCalendar, AiFillFileAdd, AiFillHome, AiFillShopping, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";


const Dashboard = () => {
    const [cart] =useCart();
    return (
        <div className="flex ">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300 ">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome">
                          <AiFillHome></AiFillHome>
                           User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                          <AiFillCalendar></AiFillCalendar>
                           Reservation</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/dashboard/cart">
                        <AiOutlineShoppingCart className="mr-2"></AiOutlineShoppingCart>
                            MyCart ({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <AiFillFileAdd className="mr-2"></AiFillFileAdd>
                          Add Review  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                        <AiOutlineUnorderedList className="mr-2"></AiOutlineUnorderedList>
                          My Booking  </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                          <AiFillHome></AiFillHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                          <AiOutlineMenu></AiOutlineMenu>
                           Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                          <AiFillShopping></AiFillShopping>
                            Shop</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;