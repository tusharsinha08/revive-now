import { useEffect, useState } from "react";

const useDoctor = () => {

    const [loading, setLoading] = useState(true)
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
                console.log("data", data);

                setDoctors(data)
                setLoading(false)
            })
    }, [])

    return [doctors, loading]
};

export default useDoctor;