import { useState } from 'react';
import img from '../../../assets/resources/female-doc.jpg'
import imgTeeth from '../../../assets/resources/teeth02.png'
import { FaPhone, FaRegClock } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";



const Details = () => {
    const [selectedService, setSelectedService] = useState("Cavity Protection");

    const services = ["Cavity Protection", "Cosmetic Dentistry", "Oral Surgery"];

    const serviceDetails = {
        "Cavity Protection": "Cavity protection helps prevent tooth decay by sealing vulnerable areas and maintaining oral health.",
        "Cosmetic Dentistry": "Cosmetic dentistry improves the appearance of teeth, including whitening, veneers, and reshaping.",
        "Oral Surgery": "Oral surgery involves procedures like tooth extractions, implants, and corrective jaw surgery.",
    };

    return (
        <div className=''>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 flex justify-center'>
                    <img className='rounded-lg' src={img} alt="a doctor" />
                </div>
                <div className='md:w-1/2 flex flex-col gap-4'>
                    <div className='space-y-8'>
                        <h3 className="text-4xl font-bold">Our Services</h3>
                        <p className='text-lg'>What are you looking for? Select a service to learn more about it.</p>

                        <div className="flex border rounded-lg overflow-hidden">
                            {services.map((service) => (
                                <button
                                    key={service}
                                    onClick={() => setSelectedService(service)}
                                    className={`w-full p-2 text-2xl text-center font-semibold transition-colors
                                                ${selectedService === service
                                            ? "bg-orange-500 text-white"
                                            : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>

                    </div>

                    <div>
                        <img className='rounded-lg border' src={imgTeeth} alt="" />
                    </div>
                    <div className='space-y-8'>
                        <h3 className="text-3xl font-semibold">{selectedService}</h3>
                        <p className='text-lg'>{serviceDetails[selectedService]}</p>

                        <button className='btn p-8 text-lg font-bold border-amber-600 text-amber-600 rounded-md hover:bg-amber-600 hover:text-white'>More Details</button>
                    </div>
                </div>
            </div>


            <div className='mt-32 w-full mx-auto flex md:flex-row flex-col gap-4 '>
                <div className='flex flex-row gap-4 bg-emerald-950 p-16 rounded-2xl text-white md:w-1/3'>
                    <FaRegClock className='text-4xl'></FaRegClock>
                    <div className='space-y-4'>
                        <p className='text-2xl font-bold'>Opening Hours</p>
                        <p className='text-xl'>Open 9:00am to 5:00pm Everyday</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4 bg-emerald-950 p-16 rounded-2xl text-white md:w-1/3'>
                    <IoLocationOutline className='text-4xl'></IoLocationOutline>
                    <div className='space-y-4'>
                        <p className='text-2xl font-bold'>Our Location</p>
                        <p className='text-xl'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4 bg-emerald-950 p-16 rounded-2xl text-white md:w-1/3'>
                    <FaPhone className='text-4xl'></FaPhone>
                    <div className='space-y-4'>
                        <p className='text-2xl font-bold'>Contact Us</p>
                        <p className='text-xl'>+88 01750 000 000 <br />
                            +88 01750 000 000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;