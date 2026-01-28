import React from 'react';
import SpeakerCard from './SpeakerCard';

const speakers = [
  {
    name: 'Dr. Satya Gupta',
    title: 'President',
    organization: 'VLSI Society of India (VSI)',
    image: '/images/satya_gupta.webp',
  },
  {
    name: 'Alok Mishra',
    title: 'Director',
    organization: 'DRAM Engineering Group\nMicron Technology',
    image: '/images/alok.webp',
  },
  {
    name: 'Atul Bhargava',
    title: 'Sr. Group Manager,\nSr.Member Technical Staff',
    organization: 'STMicroelectornics',
    image: '/images/atul.webp',
  },
  {
    name: 'Narasayya Donepudi',
    title: 'Founding Director ',
    organization: 'Sevya Multimedia',
    image: '/images/narasayaa.webp',
  },
  {
    name: 'Puneet Mittal',
    title: 'Founder,VLSI Expert',
    organization: '',
    image: '/images/puneet.webp',
  },
  {
    name: 'HS Jattana',
    title: 'Professor',
    organization: 'DAIICT, Gandhinagar',
    image: '/images/HS.webp',
  },
];

const Speakers = () => {
  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-gradient py-16 md:py-24 text-white"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-light-1 mb-3">
            Our Speakers
          </h2>

          <div className="mt-6 w-20 h-1 accent-light mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-15">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;