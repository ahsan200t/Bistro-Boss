import { FaAd, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
            <li className="menu">
                <NavLink to='/dashboard/cart'>
                    <FaShoppingCart></FaShoppingCart>
                    My Cart</NavLink>
            </li>
            <li className="menu">
                <NavLink to='/dashboard/review'>
                    <FaAd></FaAd>
                    Add a Review</NavLink>
            </li>
            <li className="menu">
                <NavLink to='/dashboard/reservation'>
                    <FaCalendar></FaCalendar>
                    Reservation</NavLink>
            </li>
            <li className="menu">
                <NavLink to='/dashboard/userHome'>
                    <FaHome></FaHome>
                    User Home</NavLink>
            </li>
            <li className="menu">
                <NavLink to='/dashboard/bookings'>
                    <FaList></FaList>
                    My Bookings</NavLink>
            </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
