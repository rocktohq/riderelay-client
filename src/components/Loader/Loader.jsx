import Lottie from "lottie-react";
import loaderAnimation from "../../assets/animations/loading.json";

const Loader = () => {
  return <Lottie animationData={loaderAnimation} loop={true} />;
};

export default Loader;
