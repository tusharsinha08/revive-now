import { FaRegCalendar, FaRegStar, FaStar } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

import { IoLocationOutline } from "react-icons/io5";

// import { Rating } from "react-rating"
// import Rating from "react-rating";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'



const Doctor = ({ doctor }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={doctor.image}
                        className="h-64 w-full object-cover"
                        alt="doctor" />
                </figure>
                <div className="card-body">
                    <div className='space-y-2.5'>
                        <div>
                            <h2 className="card-title text-2xl">{doctor.name}</h2>
                            <p className='text-xl'>{doctor.post}</p>
                        </div>
                        <div>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={doctor.rating}
                                readOnly
                                className="text-[#F7A582]"
                            />
                        </div>

                        <div className='divider'></div>
                        <div className="space-y-2 text-xl text-gray-600">
                            <p className="flex items-center gap-4"><IoLocationOutline className="text-2xl"></IoLocationOutline> {doctor.address}</p>
                            <p className="flex items-center gap-4"><FaRegCalendar className="text-2xl"></FaRegCalendar> {doctor.time}</p>
                            <p className="flex items-center gap-4"><RiMoneyDollarCircleLine className="text-2xl"></RiMoneyDollarCircleLine> {doctor.fees}</p>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn w-full p-8 text-lg font-bold border-[#F7A582] text-[#F7A582] rounded-md hover:bg-[#F7A582] hover:text-white">View Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;