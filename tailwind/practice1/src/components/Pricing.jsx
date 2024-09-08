// Desc: Pricing page
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="mb-8 text-4xl">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-blue-500 to-purple-800 text-transparent bg-clip-text">
                    (Most popular)
                  </span>
                )}
              </p>
              <p>
                <span className="text-5xl mt-font-bold">{option.price}</span> /
                Month
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
