import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const Services = () => {
  const [services, setServices] = useState(null);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/services").then((res) => setServices(res.data));
  }, [axios]);

  console.log(services);

  return <div>All services</div>;
};

export default Services;
