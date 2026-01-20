function Registration() {
    const handleRegister = (formUrl) => {
        window.open(formUrl, '_blank');
    };

    return (
        <div className="min-h-screen py-20 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        Registration
                    </h1>
                    <div className="w-24 h-1 accent-dark mx-auto mb-4"></div>
                    <p className="text-lg text-black max-w-2xl mx-auto">
                        Choose your registration type and complete your registration through <span className="font-semibold text-black">Google Forms</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {/* Online Registration */}
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 flex-col-between rounded-xl shadow-lg p-8 border-2 border-[#e9e2f1] hover:border-[#5009a2] transition-all hover:shadow-xl">
                        <div className="text-center mb-6">
                            <div className="accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark mb-2">Online Registration</h2>
                            <p className="text-gray-600 text-sm">Virtual participation</p>
                        </div>
                        <div className="mb-6">
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Access to all sessions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Live streaming</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Digital resources</span>
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => handleRegister('https://forms.gle/LtuSbLa18W2cbHVX6')}
                            className="w-full cursor-pointer accent-dark text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
                        >
                            Register Online
                        </button>
                    </div>

                    {/* Offline 1 Day */}
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 flex-col-between rounded-xl shadow-lg p-8 border-2 border-[#e9e2f1] hover:border-[#5009a2] transition-all hover:shadow-xl">
                        <div className="text-center mb-6">
                            <div className="accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark mb-2">Offline - 1 Day</h2>
                            <p className="text-dark font-bold text-xl mb-1">₹ 500</p>
                            <p className="text-gray-600 text-sm">Choose Day 1 or Day 2</p>
                        </div>
                        <div className="mb-6">
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>In-person attendance</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Choose Day 1 or Day 2</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Workshop materials</span>
                                </li>
                                {/* <li className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>Certificate of participation</span>
                                </li> */}
                            </ul>
                        </div>
                        <button
                            onClick={() => handleRegister('https://forms.gle/vPA7G44qvWwJcrdN9')}
                            className="w-full cursor-pointer accent-dark text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
                        >
                            Register for 1 Day
                        </button>
                    </div>

                    {/* Offline 2 Days */}
                    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 flex-col-between rounded-xl shadow-lg p-8 border-2 border-[#e9e2f1] hover:border-[#5009a2] transition-all hover:shadow-xl relative">
                        <div className="absolute -top-4 right-4 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Best Value
                        </div>
                        <div className="text-center mb-6">
                            <div className="accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-dark mb-2">Offline - 2 Days</h2>
                            <p className="text-dark font-bold text-xl mb-1">₹ 750</p>
                            <p className="text-gray-600 text-sm">Full event access</p>
                        </div>
                        <div className="mb-6">
                            <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>In-person attendance both days</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>All expert talks & workshops</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Complete workshop materials</span>
                                </li>
                                {/* <li className="flex items-start">
                                    <span className="text-purple-600 mr-2">✓</span>
                                    <span>Certificate of participation</span>
                                </li> */}
                                <li className="flex items-start">
                                    <span className="text-dark mr-2">✓</span>
                                    <span>Networking opportunities</span>
                                </li>
                            </ul>
                        </div>
                        <button
                            onClick={() => handleRegister('https://forms.gle/cqLqi4p9HyBXTSjs9')}
                            className="w-full cursor-pointer accent-dark text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-md"
                        >
                            Register for 2 Days
                        </button>
                    </div>
                </div>

                <div className="mt-12 accent-light rounded-lg p-6 border-l-4 border-dark">
                    <p className="text-dark text-center">
                        <strong>Note:</strong> All registrations will redirect you to Google Forms. Please fill out the form completely
                        to complete your registration. For any queries, please contact the organizing committee.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Registration;
