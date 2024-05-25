import { Link, NavLink } from "react-router-dom";
import cart from '../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'
const NavBar = () => {
  const navOptions = (
    <>
      <li><NavLink>HOME</NavLink></li>
      <li><NavLink>CONTACT US</NavLink></li>
      <li><NavLink>DASHBOARD</NavLink></li>
      <li><NavLink>OUR MENU</NavLink></li>
      <li><NavLink>OURSHOP</NavLink></li>
      <li className="h-[60px] w-[60px] p-0 m-0"><img   src={cart} alt="" /></li>
      <li><NavLink>SIGN OUT</NavLink></li>
      <li><img src="" alt="" /></li>
      
    </>
  );
  return (
    <>
      <div className="navbar justify-between bg-[#15151580]">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link
            to="/"
            className="btn h-fit text-left btn-ghost  font-black text-[#FFFFFF] font-cinzel text-3xl inline-block"
          >
            BISTRO BOSS <br />
            <span className="-tracking-[-6px]">Restaurant</span>
          </Link>
        </div>
        <div className=" hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 gap-2">{navOptions}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    </>
  );
};

export default NavBar;
