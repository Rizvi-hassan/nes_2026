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
                                <span><span className="font-bold">Visionary Keynotes:</span> Insights from global leaders shaping the future of semiconductors and VLSI.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><span className="font-bold">Expert Panels:</span> Engaging discussions on design innovation, scaling, and advanced packaging.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span><span className="font-bold">Tech Sessions:</span> Highlights of emerging trends in AI‑driven EDA, RISC‑V, and next‑gen VLSI research.</span>
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
                                <span><strong>Hands‑on Workshops:</strong> Dive into practical sessions on open‑source IC design workflows.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span><span className="font-bold">CMOS Design Workshop:</span> Build and analyze standard cells using ngspice, xschem, and Magic.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span><span className="font-bold">RTL‑to‑GDS Flow Workshop:</span> Experience full‑stack chip implementation with LibreLane.</span>
                            </li>
                            {/* <li className="flex items-start">
                                <span className="text-indigo-600 mr-2">•</span>
                                <span><span className="font-bold">Eligibility:</span> </span>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-block bg-gray-100 rounded-lg p-6 max-w-2xl">
                        <p className="text-gray-700 text-lg">
                            <strong>Eligibility:</strong> Open to participants with a solid grasp of basic circuits and digital design—typically after the 2nd year of EE, ECE, or CSE.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Event;
