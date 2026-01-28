import React from 'react';

const SpeakerCard = ({ name, title, organization, image }) => {
    return (
        <article className="w-full h-full flex flex-col items-center rounded-2xl border border-dark/40 bg-white/5 backdrop-blur-md px-6 pt-6 pb-5 shadow-lg shadow-black/50">
            <div className="w-[80%] aspect-square relative mb-5">
                {/* Rotating mask */}
                <img
                    src="/images/speaker_mask.png"
                    alt="Speaker frame"
                    className="w-[95%] abs-center object-contain opacity-60 rotate"
                />

                {/* Speaker image */}
                <div className="abs-center w-[70%] aspect-square rounded-full overflow-hidden border-2 border-dark/70 shadow-xl shadow-black/50 bg-[#120024]">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>

            <div className="text-center text-light space-y-1">
                <h3 className="text-xl md:text-xl font-semibold text-light-1 tracking-wide">
                    {name}
                </h3>
                {title && (
                    <p className="text-sm md:text-base font-medium text-blue-300 whitespace-pre-line">
                        {title}
                    </p>
                )}
                {organization && (
                    <p className="text-xs md:text-sm text-light/80 whitespace-pre-line">
                        {organization}
                    </p>
                )}
            </div>
        </article>
    );
};

export default SpeakerCard;