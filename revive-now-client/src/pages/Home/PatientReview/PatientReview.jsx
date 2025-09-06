import { useEffect, useState } from 'react';
// import Swiper from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";


const PatientReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mt-32 mb-12'>
            <div className='text-center space-y-2 mb-12'>
                <h3 className='text-4xl font-bold'>What Our Patients Says</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque libero eius pariatur architecto illo nisi iusto vitae! Mollitia, numquam error!</p>
            </div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper [&_.swiper-button-next]:!text-amber-600 [&_.swiper-button-prev]:!text-amber-600"
            >
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        className='md:px-32 px-8'
                    >

                        <li key={review._id} className="list-row">
                            <div className='flex justify-between'>
                                <div className='flex gap-4'>
                                    <div><img className="size-16 rounded-box" src={review.displayPhoto} /></div>
                                    <div>
                                        <div className='text-2xl'>{review.name}</div>
                                        <div className="font-semibold opacity-60">{review.email}</div>
                                    </div>
                                </div>
                                <FaQuoteLeft className='text-4xl text-amber-600'></FaQuoteLeft>
                            </div>
                            <p className="list-col-wrap mt-4">
                                {review.review}
                            </p>
                        </li>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default PatientReview;