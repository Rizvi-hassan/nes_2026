function Event() {
    return (
        <section id="event" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Event Schedule
                    </h2>
                    <div className="w-24 h-1 accent-dark mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Day 1 */}
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-8 shadow-lg border border-[#e9e2f1]">
                        <div className="flex items-center mb-4">
                            <div className="accent-dark text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                                1
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Day 1</h3>
                        </div>
                        <p className="text-gray-600 mb-2 font-semibold">January 30, 2026</p>
                        <ul className="space-y-3 text-gray-700 mt-4">
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Insightful keynote talks by experts from academia and industry</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Interactive panel discussions</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>Tech sessions on latest trends</span>
                            </li>
                        </ul>
                    </div>

                    {/* Day 2 */}
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-8 shadow-lg border border-indigo-100">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-800 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                                2
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Day 2</h3>
                        </div>
                        <p className="text-gray-600 mb-2 font-semibold">January 31, 2026</p>
                        <ul className="space-y-3 text-gray-700 mt-4">
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Intensive hands-on workshops on standard cell design</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Physical design flow workshops</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span>Practical exposure to industrial tools and methodologies</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block bg-gray-100 rounded-lg p-6 max-w-2xl">
                        <p className="text-gray-700 text-lg">
                            <strong>Perfect for:</strong> Undergraduate and graduate students eager to explore careers in advanced electronics,
                            and faculty looking to enrich their teaching and research.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Event;
