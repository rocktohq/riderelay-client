import PropTypes from "prop-types";
import { BiLocationPlus } from "react-icons/bi";
import { Link } from "react-router-dom";

const ProviderServiceCard = ({ providerService }) => {
  const { _id, name, image, price, area } = providerService;

  return (
    <Link to={`/services/${_id}`}>
      <div className="p-2 shadow-md rounded-md flex gap-5">
        <figure className="w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full md:h-28 lg:h-32 object-cover rounded-md"
          />
        </figure>
        <div className="flex flex-col gap-2 w-1/2">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="bg-cyan-400 rounded px-1 md:px-3 md:py-1 w-fit">
            $<span className="font-medium">{price}</span>
          </p>
          <div className="flex items-center gap-2">
            <p className="flex items-center">
              <BiLocationPlus />
              &nbsp;{area}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProviderServiceCard;

ProviderServiceCard.propTypes = {
  providerService: PropTypes.object,
};
