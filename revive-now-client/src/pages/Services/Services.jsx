import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import Background from "../../components/Background/Background";
import { Link } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from '@tanstack/react-query'


const Services = () => {

    const axiosPublic = useAxiosPublic()

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res.data
        }
    })


    const [searchTerm, setSearchTerm] = useState("");

    // Filtered services based on search
    const filteredServices = services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <Background></Background>
            {/* Hero Section */}
            <section className="bg-emerald-950 text-white py-32 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold flex justify-center items-center gap-3">
                    <MdOutlineLocalHospital className="text-white" /> Our Medical Services
                </h1>
                <p className="mt-4 text-lg max-w-2xl mx-auto">
                    Get access to the best medical services at Revive-Now.
                    Quality care, expert doctors, and advanced treatments — all in one place.
                </p>
            </section>

            {/* Search Bar */}
            <div className="flex justify-center mt-8 mb-6">
                <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-80 md:w-96">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search services..."
                        className="flex-1 bg-transparent outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-6 pb-16">
                {filteredServices.length === 0 ? (
                    <p className="text-center text-gray-500 text-lg mt-10">
                        No services found. Try another keyword.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service) => (
                            <div
                                key={service._id}
                                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300"
                            >
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mt-2">
                                        {service.description}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-[#F7A582] font-bold text-lg">
                                            {service.price}<span className="font-extrabold">৳</span>
                                        </span>
                                        <button className="btn p-4 text-lg font-bold border-[#F7A582] text-[#F7A582] rounded-md hover:bg-[#F7A582] hover:text-white"><Link to={"/appointment"}>
                                            Book Now
                                        </Link></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Services;
