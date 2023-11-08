import Typewriter from "typewriter-effect";
import BannerImage from "../../assets/images/banner.png";
const Banner = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold text-gray-700">
            RideRelay:
            <span className="text-purple-700">
              <Typewriter
                options={{
                  strings: [
                    "Share the Journey",
                    "Share the Savings",
                    "Let's head toward",
                    "Your destination",
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: "_",
                }}
              />
            </span>
          </h1>
          <p className="text-gray-500 mt-8">
            Discover seamless carpooling and ride-sharing with RideRelay, your
            ultimate travel companion. Connect with fellow commuters and
            travelers, share rides, split costs, and reduce your carbon
            footprint. Whether you are commuting to work, planning a road trip,
            or just heading in the same direction.
          </p>
        </div>
        <figure>
          <img className="rounded-md" src={BannerImage} />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
