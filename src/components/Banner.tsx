import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* <p className="mt-5 max-w-xl text-gray-500 leading-7">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your 
            next project.
          </p> */}

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="rounded-md bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-sm font-medium text-white">
              Explore Technologies
            </button>

            <button className="rounded-md border border-gray-200 px-7 py-2 text-sm text-gray-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={BannerImage}
            alt="Development Stack"
            className="w-full max-w-sm sm:max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;