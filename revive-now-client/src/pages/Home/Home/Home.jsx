import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Details from "../Details/Details";
import Featured from "../Featured/Featured";
import PatientReview from "../PatientReview/PatientReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:mx-40 mx-4">
                <Details></Details>
                <PatientReview></PatientReview>
                <Featured></Featured>
                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;