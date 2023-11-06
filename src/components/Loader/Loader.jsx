import Lottie from "lottie-react";
import loaderAnimation from "../../assets/animations/loading.json";

const Loader = () => {
  return (
    <div className="max-w-xs mx-auto">
      <Lottie animationData={loaderAnimation} loop={true} />
    </div>
  );
};

export default Loader;
