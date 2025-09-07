import doc01 from '../../../assets/resources/doc01.png'
import doc02 from '../../../assets/resources/doc02.png'
import doc03 from '../../../assets/resources/doc03.png'
import { Link } from 'react-router'

const Banner = () => {
    
    return (
        <div className="bg-[#07332F] max-h-screen font-sans relative overflow-hidden px-4 lg:px-40 mb-32">
            <>
                <div className="absolute top-1/4 left-10 w-40 h-16 bg-white/5 rounded-full transform -rotate-45 opacity-50"></div>
                <div className="absolute bottom-1/4 right-20 w-64 h-24 bg-white/5 rounded-full transform rotate-45 opacity-50"></div>
                <div className="absolute top-20 right-1/3 w-32 h-12 bg-white/5 rounded-full transform -rotate-12 opacity-40"></div>
            </>
            <div className="relative z-10 backdrop-blur-sm  max-h-screen">
                <div className="container mx-auto px-6 py-16 lg:py-24">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                                Your Best Medical Help Center
                            </h1>
                            <p className="mt-6 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                                Lorem Ipsum is simply dummy text they are printing typesetting has been the industry's standard.
                            </p>
                            {/* bg-[#F7A582] */}
                            <button className="mt-10 bg-[#F7A582] text-emerald-950 font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-colors duration-300 transform hover:scale-105">
                                All Service
                            </button>
                        </div>
                        <div>
                            <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] mt-12 lg:mt-0">
                                {/* Image 1: Woman pointing */}
                                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-40 h-48 sm:w-56 sm:h-64 bg-white p-2 sm:p-3 rounded-lg shadow-2xl transform -rotate-[12deg] transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-20">
                                    <img
                                        src={doc01}
                                        alt="Female doctor pointing"
                                        className="w-full h-full object-cover rounded-md"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/220x250/d1d5db/374151?text=Error'; }}
                                    />
                                </div>
                                {/* Image 2: Woman with thumbs up */}
                                <div className="absolute top-0 right-0 sm:right-1/4 w-48 h-64 sm:w-64 sm:h-80 bg-white p-2 sm:p-3 rounded-lg shadow-2xl z-10 transform rotate-[8deg] transition-transform duration-300 hover:scale-105 hover:rotate-0 hover:z-20">
                                    <img
                                        src={doc02}
                                        alt="Female doctor with thumbs up"
                                        className="w-full h-full object-cover rounded-md"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/250x310/d1d5db/374151?text=Error'; }}
                                    />
                                </div>
                                {/* Image 3: Man with arms crossed */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/4 w-40 h-48 sm:w-56 sm:h-60 bg-white p-2 sm:p-3 rounded-lg shadow-2xl transform -rotate-[2deg] transition-transform duration-300 hover:scale-105 hover:rotate-0 z-10 hover:z-20">
                                    <img
                                        src={doc03}
                                        alt="Male doctor with arms crossed"
                                        className="w-full h-full object-cover rounded-md"
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/220x230/d1d5db/374151?text=Error'; }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;