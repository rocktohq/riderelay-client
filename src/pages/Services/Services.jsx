import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import SCard from "./SCard";
import { Button, Label, Select, TextInput } from "flowbite-react";
import Title from "../../components/shared/Title";
import { BiSearch } from "react-icons/bi";

const Services = () => {
  const axios = useAxios();
  const [showData, setShowData] = useState(6);
  const [sortOrder, setSortOrder] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
  };

  const {
    isPending,
    isError,
    error,
    data: services,
  } = useQuery({
    queryKey: ["services", sortOrder, search],
    queryFn: async () => {
      const res = await axios.get(
        `/services?search=${search}&sortBy=price&sortOrder=${sortOrder}`
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

  return (
    <HelmetProvider>
      <Helmet>
        <title>RideRelay | Services</title>
      </Helmet>
      <main>
        <section className="max-w-screen-xl mx-auto px-3 my-16">
          <Title className="my-5">Our Services</Title>
          <div className="mb-5 flex flex-col md:flex-row md:justify-between items-center gap-5">
            {/* Searching */}
            <div className="shadow w-full md:w-fit px-5 py-2 rounded">
              <form onSubmit={handleSearch} className="flex items-center">
                <TextInput
                  type="search"
                  name="search"
                  placeholder="Search here..."
                  defaultValue={search}
                  className="w-full"
                  rightIcon={BiSearch}
                />
              </form>
            </div>

            {/* Sorting */}
            <div className="shadow w-full md:w-fit px-5 py-2 rounded">
              <div className="mb-2 block">
                <Label htmlFor="sort" value="Sort Services" />
              </div>
              <Select
                id="sort"
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full"
              >
                <option value="">Default Sorting</option>
                <option value="desc">Price Low to High</option>
                <option value="asc">Price High to Low</option>
              </Select>
            </div>
          </div>
          {services && services.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-5">
              {services.slice(0, showData).map((service) => (
                <SCard key={service._id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center my-10">
              <h1 className="text-3xl font-bold">No Services Found</h1>
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
