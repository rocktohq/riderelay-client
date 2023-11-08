import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ProvidedServiceCard from "./ProvidedServiceCard";
import BookedServiceCard from "./BookedServiceCard";

const Schedules = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { isPending, isError, error, data, refetch } = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      const bookings = await axios.get(`/bookings?email=${user.email}`);
      //   const myServices = await axios.get(`/my-services?email=${user.email}`);
      const myServices = await axios.get(
        `/my-provided-services?email=${user.email}`
      );
      return { bookings: bookings.data, myServices: myServices.data };
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

  //   console.log(data);

  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | My Schedules</title>
      </Helmet>
      <main className="bg-gray-50">
        {/* My Booking */}
        <section className="max-w-screen-xl mx-auto px-3 py-10">
          <h2 className="text-3xl font-bold my-5">My Bookings</h2>
          {data?.bookings && data?.bookings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data?.bookings.map((service) => (
                <BookedServiceCard key={service._id} bookedService={service} />
              ))}
            </div>
          ) : (
            <div className="text-center my-16">
              <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                You have not booked any services yet!
              </h3>
            </div>
          )}
        </section>

        {/* {Provied Services} */}
        <section className="max-w-screen-xl mx-auto px-3 pb-10">
          <h2 className="text-3xl font-bold my-5">My Pending Works</h2>
          {data?.myServices && data?.myServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.myServices.map((providedService) => (
                <ProvidedServiceCard
                  providedService={providedService}
                  key={providedService._id}
                  refetch={refetch}
                />
              ))}
            </div>
          ) : (
            <div className="text-center my-16">
              <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                You do not any pending services!
              </h3>
            </div>
          )}
        </section>
      </main>
    </HelmetProvider>
  );
};

export default Schedules;
