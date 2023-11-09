import Lottie from "lottie-react";
import loaderAnimation from "../../assets/animations/loading.json";

const Loader = () => {
  return (
    <div className="w-32 md:w-48 lg:w-80 mx-auto">
      <Lottie animationData={loaderAnimation} loop={true} />
    </div>
  );
};

export default Loader;
