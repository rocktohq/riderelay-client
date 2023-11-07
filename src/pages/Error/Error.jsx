import Lottie from "lottie-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import notFound from "../../assets/animations/404.json";
import Header from "../../components/Header/Header";
import Foot from "../../components/Footer/Footer";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
const Error = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="h-3/4">
          <Lottie animationData={notFound} loop={false} />
        </div>
        <div className="">
          <Link to="/">
            <Button color="purple" className="rounded">
              <AiFillHome />
              &nbsp;Go Back to Home
            </Button>
          </Link>
        </div>
      </div>
      <Foot />
    </HelmetProvider>
  );
};

export default Error;
