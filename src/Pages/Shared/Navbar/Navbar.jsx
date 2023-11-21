import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] =useCart()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/order/salad">Order Food</Link>
      </li>
      {
        //  user ? 'true' : 'false'
        // user ? condition ? 'double true' : 'oneTrue' : 'false'
      }
      
      {
        user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
      }
      {
        user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
      }
      
      <li>
        <Link to="/dashboard/cart">
          <button className="btn text-white bg-slate-600 hover:bg-slate-500">
          <AiOutlineShoppingCart className="mr-2"></AiOutlineShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>

      {user ? (
        <>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Logout
            </button>
          </li>
          <span>{user?.displayName}</span>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>{" "}
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  "
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



{/* {
        user ? isAdmin ? <li><link to="/dashboard/adminHome">Dashboard</link></li>
              : <li><link to="/dashboard/userHome">Dashboard</link></li>
      } */}