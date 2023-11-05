import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
