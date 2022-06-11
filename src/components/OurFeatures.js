import { FaTruck, FaLock } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const OurFeatures = () => {
  const features = [
    { id: 1, icon: <FaTruck size={30} />, text: "Free Shipping and Returns" },
    { id: 2, icon: <FaLock size={30} />, text: "Secured Payment" },
    { id: 3, icon: <HiCheckCircle size={30} />, text: "Customer Service" },
  ];
  return (
    <div className="w-full h-auto bg-[#1D1D1D] text-white grid grid-cols-3 py-10">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="col-span-1 flex flex-col gap-5 justify-center items-center"
        >
          {feature.icon}
          <h2>{feature.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default OurFeatures;
