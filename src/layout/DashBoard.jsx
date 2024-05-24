import { FaAd, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaUsers, FaUtensils } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex gap-10 my-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul>
          {isAdmin ? (
            <>
              <li className="menu">
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Imems
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="menu">
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li className="menu">
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li className="menu">
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li className="menu">
            <NavLink to="/order/salad">
              <IoMenu />
              Menu
            </NavLink>
          </li>
          <li className="menu">
            <NavLink to="/order/contact">
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
