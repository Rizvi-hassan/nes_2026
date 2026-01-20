import { Link } from 'react-router-dom';

function Hero() {
    return (
        <section className="bg-gradient text-white py-20 h-svh">
            {/* Image mask  */}
            <div className='absolute w-full h-full md:w-[95%] md:h-[95%] z-0 pt-20 abs-center'>
                <img src="https://ik.imagekit.io/hh2sgw5xw/NES/Group.png" alt="Mask" className='relative w-full h-full object-cover object-bottom md:hidden opacity-70' />
                {/* <img src="/images/Group.png" alt="Mask" className='relative w-full h-full object-cover object-bottom md:hidden opacity-70' /> */}
                {/* <img src="/images/Group_md.png" alt="Mask" className='relative hidden w-full h-full object-contain md:block opacity-70' /> */}
                <img src="https://ik.imagekit.io/hh2sgw5xw/NES/Group_md.png" alt="Mask" className='relative hidden w-full h-full object-contain md:block opacity-70' />
            </div>

            {/* Content  */}
            <div className="relative z-10 max-w-7xl h-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center">
                <div className=" md:w-1/2 h-1/2 md:h-fit mt-10 md:mt-0">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        VLSI Summit on <span className='text-blue-500'>N</span>anotechnology and <span className='text-blue-500'>E</span>mbedded <span className='text-blue-500'>S</span>ystems
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                        <span className='text-blue-500'>NES</span> 2026
                    </h2>
                    <p className="text-xl md:text-2xl mb-2 text-white">
                        January 30–31, 2026
                    </p>
                    <p className="text-lg md:text-xl mb-8 text-white">
                        Silicon University, Odisha
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 ">
                        <Link
                            to="/register"
                            className="bg-white text-dark px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                        >
                            Register Now
                        </Link>
                        <a
                            href="#about"
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-dark transition-colors"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 h-1/2'>
                    {/* <img src="/images/Group63.svg" alt="Illustration" className='object-cover ' /> */}
                </div>
            </div>
        </section>
    );
}

export default Hero;
