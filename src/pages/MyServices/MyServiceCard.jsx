import { Button, Modal } from "flowbite-react";
import PropTypes from "prop-types";
import { BiLocationPlus } from "react-icons/bi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useState } from "react";
import toast from "react-hot-toast";

const MyServiceCard = ({ myService, refetch }) => {
  const { _id, name, image, price, area } = myService;
  const [openModal, setOpenModal] = useState(false);
  const axios = useAxios();

  // * Delete a Service
  const handleDelete = async () => {
    const toastId = toast.loading("Deleting service...");
    try {
      const res = await axios.delete(`/delete-service/${_id}`);
      if (res.data.deletedCount > 0) {
        toast.success("Service deleted successfully", { id: toastId });
        refetch();
      } else {
        toast.error("Something went wrong", { id: toastId });
        console.log(res.data);
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }

    setOpenModal(false);
  };
  return (
    <>
      <div className="shadow-md rounded-md p-5">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="space-y-3">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="px-3 py-1 bg-cyan-500 rounded w-fit">${price}</p>
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              <BiLocationPlus />
              &nbsp;{area}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <Button
              onClick={() => setOpenModal(true)}
              color="failure"
              className="rounded"
            >
              <AiFillDelete /> Delete
            </Button>
            <Link to={`/updateService/${_id}`}>
              <Button color="failure" className="rounded">
                <AiFillEdit /> Update
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyServiceCard;
MyServiceCard.propTypes = {
  myService: PropTypes.object,
  refetch: PropTypes.func,
};
