import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BiCartAdd, BiUser } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Title from "../../components/shared/Title";
import ProviderServiceCard from "./ProviderServiceCard";

const Service = () => {
  const { user } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [providerServices, setProviderServices] = useState([]);
  const axios = useAxios();
  const { id } = useParams();
  const {
    isPending,
    isError,
    data: service,
  } = useQuery({
    queryKey: ["service"],
    queryFn: async () => {
      const res = await axios.get(`/services/${id}`);
      const proRes = await axios.get(
        `/provider-services?providerEmail=${res.data.provider.email}`
      );
      setProviderServices(proRes.data);
      return res.data;
    },
  });

  if (isPending) return <Loader />;
  if (isError)
    return (
      <div className="my-20 text-2xl text-center font-bold">
        Something went wrong
      </div>
    );

  // * Service Information
  const { _id, name, image, price, description, area, provider } = service;

  // Modal Close Function
  const onCloseModal = () => {
    setOpenModal(false);
  };

  // * Handle Booking'
  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;

    const instruction = form.instruction.value;
    const date = form.date.value;
    const client = {
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
    };

    const { _id, ...otherProperties } = service;
    const newService = { ...otherProperties };

    const booking = {
      instruction,
      status: "Pending",
      date,
      serviceId: _id,
      ...newService,
      client,
    };

    // console.log(booking);

    // Booking => POST request to the Server
    try {
      const res = await axios.post("/book-a-service", booking);
      if (res?.data?.insertedId) {
        toast.success("Service booked successfully!");
        form.reset();
        setOpenModal(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error.message);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`RideRelay | ${name}`}</title>
      </Helmet>
      <main className="bg-gray-50 py-10">
        {/* Service Information */}
        <section className="max-w-screen-xl mx-auto px-3">
          <Title className="mb-5">Service Information</Title>
          <div className="flex flex-col-reverse lg:flex-row gap-5">
            {/* Service */}
            <div className="w-full lg:w-2/3 p-5 bg-white shadow-md rounded-md">
              <figure className="rounded-md">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-contain rounded-md"
                />
              </figure>
              <div className="mt-5 space-y-2">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{description}</p>
                <div className="flex gap-5 items-center">
                  <p className="px-3 py-1 rounded bg-cyan-300">
                    $<span className="text-2xl font-medium">{price}</span>
                  </p>
                  <Button
                    color="purple"
                    className="w-full rounded"
                    onClick={() => setOpenModal(true)}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
            {/* Provider Information */}
            <div className="shadow-md rounded-md p-5 max-w-xl mx-auto lg:w-1/3 h-fit">
              <h3 className="text-2xl font-medium mb-5">
                Service Provider Information
              </h3>
              <div className="flex items-center gap-5">
                <figure>
                  <img
                    src={provider.photo}
                    alt="Provider Photo"
                    className="w-28 h-28 object-cover rounded-md"
                  />
                </figure>
                <div>
                  <p className="flex gap-2 items-center">
                    <BiUser />
                    {provider.name}
                  </p>
                  <p className="flex gap-2 items-center">
                    <HiOutlineLocationMarker />
                    {area}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-xl mx-auto px-3 my-10">
          <div className="shadow rounded-md p-5">
            <h3 className="text-2xl font-medium mb-5">
              More Services from this Provider
            </h3>
            {providerServices.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {providerServices
                  .filter((service) => service._id !== _id)
                  .map((providerService) => (
                    <ProviderServiceCard
                      key={providerService._id}
                      providerService={providerService}
                    />
                  ))}
              </div>
            )}
          </div>
        </section>

        {/* Booking Modal */}
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Book This Service
              </h3>
              <form onSubmit={handleBooking}>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="service" value="Service Name" />
                  </div>
                  <TextInput
                    id="service"
                    name="service"
                    type="text"
                    defaultValue={name}
                    disabled
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="image" value="Service Photo URL" />
                  </div>
                  <TextInput
                    id="image"
                    name="image"
                    type="text"
                    defaultValue={image}
                    disabled
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="provideremail" value="Provider Email" />
                  </div>
                  <TextInput
                    id="provideremail"
                    name="provideremail"
                    type="email"
                    defaultValue={provider?.email}
                    disabled
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your Email" />
                  </div>
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user?.email}
                    disabled
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="date" value="Date" />
                  </div>
                  <TextInput
                    id="date"
                    name="date"
                    type="date"
                    placeholder="Select a Date"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="instruction" value="Special Instruction" />
                  </div>
                  <TextInput
                    id="instruction"
                    name="instruction"
                    type="text"
                    placeholder="Special Instruction"
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="price" value="Price" />
                  </div>
                  <TextInput
                    id="price"
                    name="price"
                    type="number"
                    defaultValue={price}
                    disabled
                  />
                </div>
                <Button
                  type="submit"
                  color="purple"
                  className="font-bold w-full mt-2"
                >
                  <BiCartAdd />
                  &nbsp;<span>Purchase this Service</span>
                </Button>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </main>
    </HelmetProvider>
  );
};

export default Service;
