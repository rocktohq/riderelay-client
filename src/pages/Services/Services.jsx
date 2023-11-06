import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import SCard from "./SCard";
import { Button } from "flowbite-react";

const Services = () => {
  const axios = useAxios();
  const [showData, setShowData] = useState(6);
  const {
    isPending,
    isError,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axios.get("/services");
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

  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Services</title>
      </Helmet>
      <main>
        <section className="max-w-screen-xl mx-auto px-3">
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
                className={`mt-10 ${
                  showData >= services.length && "hidden"
                }`}
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
