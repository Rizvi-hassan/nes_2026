import Hero from '../components/Hero';
import About from '../components/About';
import Event from '../components/Event';
import Speakers from '../components/Speakers';

function Landing() {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Speakers />
            <Event />
        </div>
    );
}

export default Landing;
