import { Button, Card } from "flowbite-react";
import PropTypes from "prop-types";
import { sliceString } from "../../utils/basicfunctions";
import { Link } from "react-router-dom";
import { BiLocationPlus } from "react-icons/bi";

const SCard = ({ service }) => {
  const { _id, image, name, description, price, area, provider } = service;

  return (
    <>
      <Card>
        <div className="flex flex-col md:flex-row gap-5">
          <figure className="md:h-60 lg:h-96 md:w-72 lg:w-[450px] object-contain">
            <img className="w-full h-full rounded-md" src={image} alt={name} />
          </figure>
          <div className="flex flex-col">
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
                <span className="text-2xl font-bold text-gray-800 dark:text-white">
                  {price}
                </span>
              </p>
            </div>
            <div className="items-end">
              <p className="font-bold text-gray-800 dark:text-white flex gap2 items-center justify-center my-3">
                <BiLocationPlus />
                <span>{area}</span>
              </p>
              <Link to={`/services/${_id}`}>
                <Button color="purple" className="rounded w-full mt-5">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default SCard;
SCard.propTypes = { service: PropTypes.object };
