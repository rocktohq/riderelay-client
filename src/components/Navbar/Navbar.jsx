import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import {
  AiOutlineAppstoreAdd,
  AiOutlineSetting,
  AiOutlineSchedule,
} from "react-icons/ai";
import { BiLogOutCircle, BiLogInCircle } from "react-icons/bi";

function Nav() {
  const { user, signOutUser } = useAuth();

  // * Logout User
  const handleLogout = () => {
    signOutUser();
  };
  return (
    <Navbar fluid rounded>
      <Link to="/" className="flex items-center">
        <img src="/favicon.png" className="mr-3 h-6 md:h-9" alt="RideRelay" />
        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          Ride<span className="text-purple-600">Relay</span>
        </span>
      </Link>
      <div className="flex md:order-2">
        {user?.email ? (
          <div className="flex items-center gap-1">
            <span className="hidden md:flex">{user?.displayName}</span>
            <Dropdown
              arrowIcon={true}
              inline
              label={
                <Avatar alt="User settings" img={user?.photoURL} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-lg">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item icon={AiOutlineSchedule}>
                <Link to="/shcedules">My Shcedules</Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout} icon={BiLogOutCircle}>
                Sign Out
              </Dropdown.Item>
            </Dropdown>
          </div>
        ) : (
          <Link to="/login">
            <Button color="purple" className="rounded font-bold">
              <BiLogInCircle />
              &nbsp;<span>Login</span>
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/" className="text-lg pb-1 border-b lg:border-none">
          Home
        </NavLink>
        {user?.email && (
          <div className="text-lg">
            <Dropdown arrowIcon={true} label="Dashboard" inline>
              <NavLink to="/addService">
                <Dropdown.Item icon={AiOutlineAppstoreAdd}>
                  Add Service
                </Dropdown.Item>
              </NavLink>
              <NavLink to="/manageService">
                <Dropdown.Item icon={AiOutlineSetting}>
                  My Services
                </Dropdown.Item>
              </NavLink>
              <NavLink to="/shcedules">
                <Dropdown.Item icon={AiOutlineSchedule}>
                  My Shcedules
                </Dropdown.Item>
              </NavLink>
            </Dropdown>
          </div>
        )}
        <NavLink
          to="/services"
          className="text-lg pb-1 border-b lg:border-none hover:text-purple-700"
        >
          Services
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
