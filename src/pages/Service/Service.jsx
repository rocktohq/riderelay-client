import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BiUser } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Button } from "flowbite-react";

const Service = () => {
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

  const { name, image, price, description, area, provider } = service;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`RideRelay | ${name}`}</title>
      </Helmet>
      <main className="bg-gray-50 py-10">
        <section className="max-w-screen-xl mx-auto px-3">
          <div className="flex flex-col-reverse lg:flex-row gap-5">
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
                  <p className="px-3 py-1 rounded bg-cyan-300">$
                    <span className="text-2xl font-medium">{price}</span>
                  </p>
                  <Button color="purple" className="w-full rounded">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
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
      </main>
    </HelmetProvider>
  );
};

export default Service;
