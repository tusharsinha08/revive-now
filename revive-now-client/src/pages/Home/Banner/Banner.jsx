import banner from '../../../assets/resources/banner02.png'
import './Banner.css'
import doc01 from '../../../assets/resources/doc01.png'
import doc02 from '../../../assets/resources/doc02.png'
import doc03 from '../../../assets/resources/doc03.png'
import { Link } from 'react-router'

const Banner = () => {
    const photos = [
        { src: doc01, rotate: '6', top: 'top-5 md:top-[-50px]', left: 'left-10 md:left-0', zIndex: 10 },
        { src: doc03, rotate: '3', top: 'top-20 md:top-[80px]', left: 'left-35 md:left-[230px]', zIndex: 15 },
        { src: doc02, rotate: '-8', top: 'top-10 md:top-[-90px]', left: 'left-60 md:left-[400px]', zIndex: 420 }
    ];


    return (
        <div className='background md:px-40 min-h-[500px] md:min-h-[650px] mb-32' style={{ backgroundImage: `url(${banner})` }}>
            <div className='md:flex md:flex-row items-center'>
                <div className='md:w-1/2 md:text-left pt-20 text-center items-center'>
                    <h2 className='md:text-7xl text-4xl text-white font-bold mb-8 mt-20'>Your Best Medical Help Center</h2>
                    <p className='text-xl text-gray-300 mb-8'>Connect with trusted doctors and book appointments instantly from the comfort of your home.
                    </p>
                    <button className='btn p-8 text-lg font-bold border-amber-600 rounded-md bg-amber-600 text-white hover:bg-white hover:text-amber-600'>
                        <Link to={'/services'}>All Service</Link>
                    </button>
                </div>
                <div className='md:w-1/2'>
                    {/* <img src={doc01} alt="" /> */}
                    <div className="relative">
                        {
                            photos.map(({ src, rotate, top, left, zIndex }, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`Photo ${idx + 1}`}
                                    className={`absolute ${top} ${left} md:w-[300px] md:h-[350px] w-[150px] h-[200px] rounded-lg border-4 border-white shadow-lg object-cover`}
                                    style={{
                                        transform: `rotate(${rotate}deg)`,
                                        zIndex
                                    }}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;