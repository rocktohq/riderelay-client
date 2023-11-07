import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import SCard from "./SCard";
import { Button } from "flowbite-react";
import Title from "../../components/shared/Title";

const Services = () => {
  const axios = useAxios();
  const [showData, setShowData] = useState(6);
  const [sortOrder, setSortOrder] = useState("");
  const {
    isPending,
    isError,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services", sortOrder],
    queryFn: async () => {
      const res = await axios.get(
        `/services?sortBy=price&sortOrder=${sortOrder}`
      );
      return res.data;
    },
  });

  // If data is not Loaded
  if (isPending) return <Loader />;

  // If any error is encountered
  if (isError) {
    toast.error("Something went wrong");
    console.log(error);
    return;
  }

  // console.log(services);
  console.log(sortOrder);
  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Services</title>
      </Helmet>
      <main>
        <section className="max-w-screen-xl mx-auto px-3 my-16">
          <Title className="my-5">Our Services</Title>
          <div className="shadow w-fit px-5 py-2 rounded mb-5">
            <select
              onChange={(e) => setSortOrder(e.target.value)}
              className="border rounded border-gray-500"
            >
              <option selected disabled>
                Sort Service
              </option>
              <option value="desc">Price Low to High</option>
              <option value="asc">Price High to Low</option>
            </select>
          </div>
          {services && (
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
              {services.slice(0, showData).map((service) => (
                <SCard key={service._id} service={service} />
              ))}
            </div>
          )}
          <div>
            {services && services.length > 6 && (
              <div
                className={`mt-10 ${showData >= services.length && "hidden"}`}
              >
                <Button
                  color="purple"
                  outline
                  onClick={() => setShowData(services.length)}
                  className="mx-auto"
                >
                  See All Services
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Services;
