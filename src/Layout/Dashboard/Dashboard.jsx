import {  AiFillCalendar, AiFillFileAdd, AiFillHome, AiFillShopping, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUnorderedList } from "react-icons/ai";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import {  FaBook, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [cart] =useCart();
    // Todo : get isAdmin value from database
    const [isAdmin] = useAdmin() 
    return (
        <div className="flex ">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-300 ">
              <div><p className="mt-2 text-3xl text-center font-bold text-red-600">Bistro Boss</p></div>
                <ul className="menu">
                    {
                        isAdmin ? <>
                        <li>
                        <NavLink to="/dashboard/adminHome">
                          <AiFillHome></AiFillHome>
                           Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                          <FaUtensils></FaUtensils>
                           Add Item</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/dashboard/manageItems">
                        <FaList className=""></FaList>
                            Manage Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                        <FaBook className=""></FaBook>
                          Manage Booking  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users">
                        <FaUsers className="mr-2"></FaUsers>
                          All Users  </NavLink>
                    </li>
                        </>
                          :<>
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
                        <NavLink to="/dashboard/paymentHistory">
                        <AiOutlineUnorderedList className="mr-2"></AiOutlineUnorderedList>
                          Payment History  </NavLink>
                    </li>
                          </>
                    }
                     {/* shared nav link */}
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
                    <li>
                        <NavLink to="/order/contact">
                          <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
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