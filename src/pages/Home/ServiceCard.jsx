import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
import { sliceString } from "../../utils/basicfunctions";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, image, name, description, price, provider } = service;

  return (
    <>
      <Card className="flex flex-col">
        <figure className="md:h-60 lg:h-96">
          <img className="w-full h-full rounded-md" src={image} alt={name} />
        </figure>
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {sliceString(description)}
          </p>
          <div className="flex justify-between items-center mt-5">
            <div className="flex items-center gap-2">
              <img className="h-12 w-12 rounded-full" src={provider.photo} />
              <p>{provider.name}</p>
            </div>
            <p>
              $
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {price}
              </span>
            </p>
          </div>
          <Link to={`/services/${_id}`}>
            <Button color="purple" className="rounded w-full mt-5">
              View Details
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default ServiceCard;
ServiceCard.propTypes = { service: PropTypes.object };
