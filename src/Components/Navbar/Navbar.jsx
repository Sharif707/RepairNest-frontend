import { Link, NavLink } from "react-router-dom";
import homelogo from "../../assets/homelogo.avif";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const logOutUser = () => {
    logOut()
      .then((res) => toast.success("successfully logged out"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="navbar bg-base-100 shadow-lg font-medium z-50 relative">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3  w-52 sm:w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative pr-2 py-2 ${
                  isActive
                    ? "text-[#099b4a] mb-3 w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                    : "w-fit mb-3 mx-auto text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/all-services"
              className={({ isActive }) =>
                `relative pr-2 py-2 ${
                  isActive
                    ? "text-[#099b4a] mb-3 w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                    : "w-fit mb-3 mx-auto text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
                }`
              }
            >
              All Services
            </NavLink>

            {user && (
              <>
             
                <NavLink
              to="/add-product"
              className={({ isActive }) =>
                `relative pr-2 py-2 ${
                  isActive
                    ? "text-[#099b4a] mb-3 w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                    : "w-fit mb-3 mx-auto text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
                }`
              }
            >
              Add Service
            </NavLink>
                <NavLink
              to="/manage-services"
              className={({ isActive }) =>
                `relative pr-2 py-2 ${
                  isActive
                    ? "text-[#099b4a] mb-3 w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                    : "w-fit mb-3 mx-auto text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
                }`
              }
            >
             Manage Services
            </NavLink>

            <NavLink
              to="/booked-services"
              className={({ isActive }) =>
                `relative pr-2 py-2 ${
                  isActive
                    ? "text-[#099b4a] mb-3 w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                    : "w-fit mb-3 mx-auto text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
                }`
              }
            >
             Booked Services
            </NavLink>

            <NavLink
              to="/service-to-do"
              className={({ isActive }) =>
                `relative pr-2 py-2 ${
                  isActive
                    ? "text-[#099b4a] mb-3 w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                    : "w-fit mb-3 mx-auto text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
                }`
              }
            >
             Service-To-Do
            </NavLink>
              

                

              
              </>
            )}
          </ul>
        </div>
        <img src={homelogo} className=" w-24" alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* home button */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-4  py-2 ${
                isActive
                  ? "text-[#099b4a] w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                  : "w-fit mx-auto text-[#4e53ad] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
              }`
            }
          >
            Home
          </NavLink>

          {/* Services menu */}
          <NavLink
            to="/all-services"
            className={({ isActive }) =>
              `relative px-4 py-2 ${
                isActive
                  ? "text-[#099b4a] w-fit mx-auto font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#099b4a] after:transition-all after:duration-300"
                  : "w-fit mx-auto text-[#4e53ad] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#099b4a] after:transition-all after:duration-300"
              }`
            }
          >
            All Services
          </NavLink>

          {user && (
            <li>
              <details>
                <summary>Dashboard</summary>
                <ul className="p-2 w-52 z-50">
                  <li className="text-[#4e53ad] hover:text-[#099b4a]">
                    <Link to={"/add-product"}>Add Service</Link>
                  </li>
                  <li className="text-[#4e53ad] hover:text-[#099b4a] ">
                    <Link to={"/manage-services"}>Manage Service</Link>
                  </li>
                  <li className="text-[#4e53ad] hover:text-[#099b4a] ">
                    <Link to={"/booked-services"}>Booked Services</Link>
                  </li>
                  <li className="text-[#4e53ad] hover:text-[#099b4a] ">
                    <Link to={"/service-to-do"}>Service-To-Do</Link>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {user ? (
          <>
            <img
              className="w-10 rounded-full focus:"
              referrerPolicy="no-referrer"
              alt="user-profile-photo"
              src={user?.photoURL}
            />
            <button
              onClick={logOutUser}
              className="flex items-center justify-center px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="mr-2">Sign Out</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
            </button>
          </>
        ) : (
          <Link to={"/signin"}>
            <button className="btn bg-[#087a3a] text-white">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
