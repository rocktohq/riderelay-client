const Owner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
      <figure className="md:h-60 lg:h-96 md:w-60 lg:w-96">
        <img
          className="w-full h-full md:rounded-full mx-auto object-contain md:border-2"
          src="https://i.ibb.co/60qX5Mz/monir.png"
        />
      </figure>
      <div>
        <p className="text-gray-800 text-lg">
         {`"Welcome to our RideRelay Corp, where I, Rockto, lead the charge! With
          a passion for eco-friendly commuting, I have crafted this platform to
          connect like-minded travelers. Join us in our mission for convenient,
          sustainable travel, making every journey memorable and
          planet-friendly. Lets ride together toward a greener tomorrow!"`}
        </p>
        <p className="mt-5 mr-2 text-gray-700 text-xl">
          -Rockto, Founder, RideRelay Corp.
        </p>
      </div>
    </div>
  );
};

export default Owner;
