import PropTypes from "prop-types";
import { sliceString } from "../../utils/basicfunctions";
import { BiCalendar, BiLocationPlus } from "react-icons/bi";
import { TbStatusChange } from "react-icons/tb";

const BookedServiceCard = ({ bookedService }) => {
  const { name, image, description, date, area, price, status } = bookedService;
  return (
    <div className="p-5 shadow-md rounded-md flex flex-col justify-between bg-white">
      <figure>
        <img src={image} className="w-full h-48 object-cover" alt={name} />
      </figure>
      <div className="space-y-3 flex flex-col">
        <h3 className="text-xl font-bold mt-5">{name}</h3>
        <p>{sliceString(description)}</p>
        <div className="flex items-center justify-between">
          <p className="px-3 py-1 bg-cyan-600 rounded w-fit text-white flex items-center">
            <BiLocationPlus />
            &nbsp;{area}
          </p>
          <p className="text-gray-600 dark:text-gray-400 flex items-center">
            <BiCalendar />
            &nbsp;{date}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            $<span className="text-xl font-medium">{price}</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 flex items-center">
            <TbStatusChange />
            &nbsp;{status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookedServiceCard;
BookedServiceCard.propTypes = {
  bookedService: PropTypes.object,
};
