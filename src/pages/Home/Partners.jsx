import ServiceNow from "../../assets/logos/ServiceNow-Logo.png";
import Fedex from "../../assets/logos/Fedex-logo.png";
import HotWheel from "../../assets/logos/Hot-Wheels-logo.png";
import Costco from "../../assets/logos/Costco-logo.png";

const Partners = () => {
  return (
    <div className="flex gap-5">
      <div className="p-3 hover:bg-gray-50 rounded-md">
        <img src={ServiceNow} alt="DHL" />
      </div>
      <div className="p-3 hover:bg-gray-50 rounded-md">
        <img src={Fedex} alt="Fedex" />
      </div>
      <div className="p-3 hover:bg-gray-50 rounded-md">
        <img src={HotWheel} alt="Hot Wheels" />
      </div>
      <div className="p-3 hover:bg-gray-50 rounded-md">
        <img src={Costco} alt="Costco" />
      </div>
    </div>
  );
};

export default Partners;
