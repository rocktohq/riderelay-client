import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import { useQuery } from "@tanstack/react-query";
// import axios from "../../hooks/useAxios";
import Loader from "../../components/Loader/Loader";
import ServiceCard from "./ServiceCard";
import toast from "react-hot-toast";
import axios from "axios";
import Title from "../../components/shared/Title";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const Home = () => {
  const {
    isPending,
    isError,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      // const res = await axios.get("/services");
      const res = await axios("http://localhost:5000/api/v1/services");
      return res.data;
    },
  });

  if (isPending) return <Loader />;
  if (isError) return toast.error(error);
  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Home</title>
      </Helmet>
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <section>
          <Banner />
        </section>
        
        {/* Services */}
        <section>
          <Title className="my-5">Our Latest Services</Title>
          {services && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service._id} service={service} />
              ))}
            </div>
          )}

          <Link to="/services">
            <Button color="purple" outline className="rounded mt-5 mx-auto">
              All Services
            </Button>
          </Link>
        </section>

        {/*  */}
      </main>
    </HelmetProvider>
  );
};

export default Home;
