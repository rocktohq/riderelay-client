import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProviderServiceCard = ({ providerService }) => {
  const { _id, name, image, price, provider } = providerService;

  return (
    <Link to={`/services/${_id}`}>
      <div className="p-2 shadow-md rounded-md flex gap-2">
        <figure className="w-1/2">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-md"
          />
        </figure>
        <div className="flex flex-col justify-center w-1/2">
          <h3 className="font-bold text-lg">{name}</h3>
          <p>
            $<span className="font-medium">{price}</span>
          </p>
          <div className="flex items-center gap-2">
            <img className="h-8 w-8 rounded-full" src={provider.photo} />
            <p className="text-xs">{provider.name}</p>
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
