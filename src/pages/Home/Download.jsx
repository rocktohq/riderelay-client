import { Link } from "react-router-dom";
import Title from "../../components/shared/Title";

const Download = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
      <div>
        <Title className="mb-5">Save more, ride with Share</Title>
        <p>
          Book cabs on the run, even when you are offline. Track ride and keep
          your loved ones informed and get access to the best deals.
        </p>
        <div className="mt-10">
          <Link to="">
            <img
              className="mx-auto"
              src="https://i.ibb.co/TvxnRCM/playstore.png"
              alt="playstore"
            />
          </Link>
          <Link to="">
            <img
              className="mx-auto"
              src="https://i.ibb.co/BtV9w7n/appstore.png"
              alt="appstore"
            />
          </Link>
        </div>
      </div>
      <figure>
        <img src="https://i.ibb.co/Hr1PCgD/ola-booking.png" alt="Booking" />
      </figure>
    </div>
  );
};

export default Download;
