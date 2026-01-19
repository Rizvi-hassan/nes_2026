import Hero from '../components/Hero';
import About from '../components/About';
import Event from '../components/Event';

function Landing() {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Event />
        </div>
    );
}

export default Landing;
