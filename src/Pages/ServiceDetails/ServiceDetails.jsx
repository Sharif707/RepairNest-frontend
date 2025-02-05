
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../Components/BookingModal/BookingModal";

const ServiceDetails = () => {

  const service = useLoaderData();

  const handleSetModal = () => {
    const modal = document.getElementById("my_booking_modal_5");
    if (modal) {
      modal.showModal();
    }
  };

  const handleCloseModal = () => {
    const modal = document.getElementById("my_booking_modal_5");
    if (modal) {
      modal.close();
    }
  };


  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Service Provider Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
          <img
          referrerPolicy="no-referrer"
            src={service.providerImage}
            alt={service.providerName}
            className="w-24 h-24 object-cover rounded-full border-4 border-blue-500"
          />
          <h2 className="text-2xl font-semibold mt-4">
            {service.providerName}
          </h2>
          <p className="text-lg text-gray-500 mt-2">{service.area}</p>
        </div>

        {/* Single Service Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4">{service.name}</h1>
          <p className="text-lg text-gray-700 mt-2">{service.description}</p>

          <div className="flex items-center mt-4">
            <img
            referrerPolicy="no-referrer"
              src={service?.providerImage}
              alt={service.providerName}
              className="w-12 h-12 object-cover rounded-full"
            />
            <p className="ml-2 font-medium text-gray-800">
              {service.providerName}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-bold text-green-600">{service.price}</p>
            <button
              onClick={handleSetModal}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      <BookingModal handleCloseModal={handleCloseModal} service={service} />
    </div>
  );
};

export default ServiceDetails;
