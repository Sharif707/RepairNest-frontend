import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
      <p className="text-gray-600 text-sm mt-2">
        {service.description.slice(0, 153)}...
      </p>
      <div className="mt-4 flex items-center">
        <img
          referrerPolicy="no-referrer"
          src={service.providerImage}
          alt={service.providerName}
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-2">
          <p className="font-medium">{service.providerName}</p>
          <p className="text-sm text-gray-500">{service.serviceArea}</p>
        </div>
      </div>
      <p className="text-xl font-bold text-green-600 mt-2">${service.price}</p>
      <Link to={`/service-details/${service._id}`}>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">
          View Detail
        </button>
      </Link>
    </div>
  );
};

export default ServiceCard;
