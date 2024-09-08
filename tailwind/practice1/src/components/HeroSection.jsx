import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-gradient-to-r from-blue-500 to-blue-900 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="text-center text-lg mt-10 text-neutral-500">
        Empower your team with the best tools to build your next project and
        take it to the next level. Get started today!
      </p>
      <div className="flex justify-center my-10">
        <button className="bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-3 rounded-md">
          Get Started
        </button>
        <button className="py-3 px-4 rounded-md border mx-3">
          Documentation
        </button>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
