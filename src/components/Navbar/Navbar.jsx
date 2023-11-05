import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Link to="/" className="flex items-center">
          <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="RideRelay" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            RideRelay
          </span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2">
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
            <span className="block text-sm">Saidul Mursalin</span>
            <span className="block truncate text-sm font-medium">
              monir@gmail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign Out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/services"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Services
          </NavLink>
        </Navbar.Link>
        <Navbar.Link>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Login
          </NavLink>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
