import { VscCallOutgoing } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form"



const Contact = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        reset()
        console.log(data)
        // todo: post data to server with axios-----
    }

    return (
        <div className='flex flex-col md:flex-row gap-4 bg-emerald-950 md:p-20 p-12 rounded-xl mt-32 '>
            <div className='md:w-3/7 text-white space-y-10'>
                <h3 className='text-white text-4xl font-bold'>Contact With Us</h3>
                <p className='text-base-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt alias cupiditate accusamus veritatis veniam quisquam consequatur odit odio aliquid, eum quasi officia amet ipsum magni rerum et consectetur? Repellat provident dignissimos excepturi minima incidunt quidem expedita quaerat temporibus et itaque?</p>

                <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xl">
                        <VscCallOutgoing></VscCallOutgoing>
                        <p>+88 0000000123</p>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <IoLocationOutline></IoLocationOutline>
                        <p>Dhanmondi, Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='md:w-4/7'>
                <div className="flex justify-center w-full">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full space-y-5 text-white"
                    >

                        <div className="grid md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-xl focus:border-white bg-white/5"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">{errors.name.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    placeholder="Email"
                                    className="input input-xl focus:border-white bg-white/5"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Phone Number */}
                            <div>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    {...register("number", {
                                        required: "Phone number is required",
                                        minLength: { value: 10, message: "Minimum 10 digits required" },
                                        maxLength: { value: 15, message: "Maximum 15 digits allowed" },
                                        pattern: { value: /^[0-9]+$/, message: "Only numbers are allowed" },
                                    })}
                                    placeholder="Phone"
                                    className="input input-xl focus:border-white bg-white/5"
                                />
                                {errors.number && (
                                    <p className="text-red-500 text-sm">{errors.number.message}</p>
                                )}
                            </div>

                            {/* Doctor Name */}
                            <div>
                                <input
                                    type="text"
                                    {...register("doctor", { required: "Doctor name is required" })}
                                    placeholder="Doctor's name"
                                    className="input input-xl focus:border-white bg-white/5"
                                />
                                {errors.doctor && (
                                    <p className="text-red-500 text-sm">{errors.doctor.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Date */}
                            <div>
                                <input
                                    type="date"
                                    {...register("date", { required: "Date is required" })}
                                    className="input input-xl focus:border-white bg-white/5 text-gray-400"
                                />
                                {errors.date && (
                                    <p className="text-red-500 text-sm">{errors.date.message}</p>
                                )}
                            </div>
                            {/* Time */}
                            <div>
                                <select defaultValue="Time"

                                    className="select select-xl bg-white/5 focus:border-white text-gray-400 focus:bg-emerald-950 "
                                    {...register("time", { required: "Date is required" })}
                                >
                                    <option disabled={true} hidden>Time</option>
                                    <option >Morning</option>
                                    <option>Afternoon</option>
                                    <option>Evening</option>
                                </select>
                                {errors.date && (
                                    <p className="text-red-500 text-sm">{errors.date.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn w-full p-8 text-lg font-bold rounded-md border-0 bg-orange-500 text-white hover:bg-white hover:text-orange-500"
                        >
                            Book Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;