import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-between">
        <div className="text-5xl font-bold text-purple-700">
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("RideRelay: ")
                .pauseFor(2000)
                .typeString("Share the Journey, ")
                .pauseFor(2000)
                .typeString("Share the Savings")
                .start();
            }}
          />
        </div>
        <p className="text-gray-500 mt-8">
          Discover seamless carpooling and ride-sharing with RideRelay, your
          ultimate travel companion. Connect with fellow commuters and
          travelers, share rides, split costs, and reduce your carbon footprint.
          Whether you are commuting to work, planning a road trip, or just
          heading in the same direction.
        </p>
      </div>
      <figure>
        <img className="rounded-md" src="" />
      </figure>
    </div>
  );
};

export default Banner;
