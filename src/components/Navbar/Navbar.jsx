import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Nav() {
  const { user, signOutUser } = useAuth();
  const handleLogout = () => {
    signOutUser();
  };
  return (
    <Navbar fluid rounded>
      <Link to="/" className="flex items-center">
        <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="RideRelay" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          RideRelay
        </span>
      </Link>
      <div className="flex md:order-2">
        {user?.email ? (
          <Dropdown
            arrowIcon={true}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign Out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/login">
            <Button color="purple" className="rounded">
              Login
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink to="/" className="text-lg pb-1 border-b lg:border-none">
          Home
        </NavLink>

        <NavLink
          to="/services"
          className="text-lg pb-1 border-b lg:border-none"
        >
          Services
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
