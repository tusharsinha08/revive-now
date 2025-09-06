import useDoctor from "../../../hooks/useDoctor";
import Doctor from "../../Shared/Doctor/Doctor";

const Featured = () => {
    const [doctors] = useDoctor()
    const featured = doctors.filter(doctor => doctor.rating >= 4.5).slice(0, 3)

    return (
        <div className="mt-32">
            <div className='text-center space-y-2 mb-12'>
                <h3 className='text-4xl font-bold'>Our Expert Doctors</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque libero eius pariatur architecto illo nisi iusto vitae! Mollitia, numquam error!</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    featured.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </div>
    );
};

export default Featured;