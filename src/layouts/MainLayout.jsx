import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Foot from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Foot />
    </>
  );
};

export default MainLayout;
