import PropTypes from "prop-types";
import { sliceString } from "../../utils/basicfunctions";
import { BiCalendar, BiLocationPlus } from "react-icons/bi";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const ProvidedServiceCard = ({ providedService, refetch }) => {
  const { name, image, description, date, area, instruction, status } =
    providedService;
  const axios = useAxios();
  const { user } = useAuth();

  // * Change Status
  const handleStatusChange = async (st) => {
    const { _id, ...otherProperties } = providedService;
    const newBooking = { status: st, ...otherProperties };
    newBooking["status"] = st;

    // Update Status => PUT request to the Server
    const toastId = toast.loading("Changing status...");
    try {
      const res = await axios.put(
        `/update-booking/${_id}?email=${user?.email}`,
        newBooking
      );

      if (res.data.modifiedCount > 0) {
        toast.success("Status changed successfully!", { id: toastId });
        refetch();
      }
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
      console.log(err.message);
    }
  };

  return (
    <div className="p-5 shadow-md rounded-md flex flex-col justify-between bg-white">
      <figure>
        <img src={image} className="w-full h-48 object-cover" alt={name} />
      </figure>
      <div className="flex flex-col">
        <div className="space-y-3">
          <h3 className="text-xl font-bold mt-5">{name}</h3>
          <p className="text-justify">{sliceString(description)}</p>
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
          <p className="text-gray-500">
            <span className="font-semibold">Instruction:&nbsp;</span>
            {instruction}
          </p>
        </div>
        <div>
          <select
            onChange={(e) => handleStatusChange(e.target.value)}
            className="border rounded border-gray-500"
          >
            <option selected disabled>
              {status}
            </option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProvidedServiceCard;
ProvidedServiceCard.propTypes = {
  providedService: PropTypes.object,
  refetch: PropTypes.func,
};
