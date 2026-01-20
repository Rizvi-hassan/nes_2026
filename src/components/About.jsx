function About() {
    return (
        <section id="about" className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About NES 2026
                    </h2>
                    <div className="w-24 h-1 accent-dark mx-auto"></div>
                </div>

                <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                        Join the Department of Electronics Engineering at Silicon University for the <strong>7th edition of NES 2026</strong>,
                        in partnership with the <strong>VLSI Society of India (VSI)</strong> and <strong>Sevya Multimedia</strong>.
                    </p>

                    <p>
                        NES 2026 brings together distinguished industry leaders, academic experts, and researchers to explore the latest
                        innovations shaping the future of VLSI, nanotechnology, and embedded systems. The summit provides a dynamic platform
                        for students, educators, and early career engineers to engage with emerging technologies driving today's semiconductor
                        and electronics industries.
                    </p>

                    <p>
                        Designed especially for undergraduate students in electronics and electrical engineering, this summit opens pathways
                        to new knowledge, collaboration, and career inspiration. Faculty members will also benefit from interactions that enhance
                        teaching and research practices.
                    </p>

                    <div className="mt-8 p-6 accent-light rounded-lg border-l-4 border-dark">
                        <p className="text-dark font-semibold">
                            🔗 Be part of the community shaping the next wave of VLSI and embedded system innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
