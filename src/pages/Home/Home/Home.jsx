
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../ContactMe/Contact';

const Home = () => {
    return (
        <div>
            <div className='bg-[#131313] '>
                <Banner></Banner>
            </div>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;