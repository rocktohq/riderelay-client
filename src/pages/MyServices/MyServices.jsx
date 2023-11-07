import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Title from "../../components/shared/Title";
import MyServiceCard from "./MyServiceCard";

const MyServices = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const {
    isPending,
    isError,
    error,
    data: myServices,
    refetch,
  } = useQuery({
    queryKey: ["schedules"],
    queryFn: async () => {
      const myServices = await axios.get(`/my-services?email=${user.email}`);
      return myServices.data;
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

  //   console.log(myServices);

  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Manage Services</title>
      </Helmet>
      <main>
        <section className="max-w-screen-xl mx-auto px-3 my-10">
          <Title>Manage Services</Title>
          <div>
            {myServices.length && myServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {myServices.map((myService) => (
                  <MyServiceCard
                    key={myService._id}
                    myService={myService}
                    refetch={refetch}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center my-16">
                <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                  You have not added any services yet!
                </h3>
              </div>
            )}
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};

export default MyServices;
