import React from 'react'

const timeLine = [
  {
    name: "Inaugration",
    date: "Friday, 30th January",
    events: [
      {
        time: "09:45 AM",
        activity: "Inauguration",
        by: ""
      },
      {
        time: "10:15 AM",
        activity: "Address by Chief Guest",
        by: "Shri Manas Panda\n Jurisdictional Director and Scientist 'G', STPI"
      },
      {
        time: "10:30 AM",
        activity: "Address by Guest of Honor",
        by: "Dr. Satya Gupta\n President, VLSI Society of India(VSI) "
      },
      {
        time: "10:45 AM",
        activity: "Address by Sponsor and Guest of Honor",
        by: "Narasayya Donepudi\n Founding Director, Sevya Multimedia"
      },
      {
        time: "10:55 AM",
        activity: "Vote of Thanks",
        by: "Dr. Saroj Rout\n Convenor, NES- 2026"
      },
      {
        time: "11:00 AM",
        activity: "Address and Keynote Talk",
        by: "Harpreet Singh Jattana\n Professor, DAU, Gandhinagar"
      },
    ]
  },
  {
    name: "Panel Discussion",
    date: "Friday, 30th January",
    events: [
      {
        time: "12:00 PM",
        activity: "Panel Discussion",
        by: "Moderator: Mr. Atul Bhargava\n Panelist: H.S.Jattana, Alok Mishra, Narasayya Donepudi, Puneet Mittal"
      },
      {
        time: "02:00 PM",
        activity: "Invited Talk",
        by: "Alok Mishra\n Director, DRAM Engineering Group Micron Technology"
      },
      {
        time: "02:50 PM",
        activity: "Invited Talk",
        by: "Atul Bhargava\n Sr.Group Manager, Sr.Member Technical Staff, STMicroelectornics, Noida"
      },
      {
        time: "04:00 PM",
        activity: "Invited Talk",
        by: "Puneet Mittal\n Founder, VLSI Expert, Noida"
      },
      {
        time: "05:00 PM",
        activity: "Closing Remarks",
        by: ""
      }
    ]
  },
  {
    name: "Workshop",
    date: "Saturday, 31th January",
    events: [
      {
        time: "10:00 AM",
        activity: " CMOS Standard Cell Library Development",
        by: "Dr. Santunu Sarangi, Soumya Biswal and Mahesh Uppathi\nSevya Multimedia"
      },
      {
        time: "02:00 PM",
        activity: "RTL-to-GDS using open source toolchain LibreLane",
        by: "Mandava Gupta & Lakshmi Narayanan\nSevya Multimedia"
      },
      {
        time: "05:00 PM",
        activity: "Closing Remarks",
        by: ""
      }
    ]
  }
]

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Event Timeline
          </h2>
          <div className="w-24 h-1 accent-dark mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {timeLine.map((session, sessionIndex) => (
            <div key={sessionIndex} className="relative">
              {/* Session Header */}
              <div className="mb-8">
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-6 shadow-lg border border-[#e9e2f1]">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="accent-dark text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                        {sessionIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{session.name}</h3>
                        <p className="text-dark font-semibold mt-1">{session.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Events */}
              <div className="relative pl-8 md:pl-0">
                {/* Vertical Timeline Line - centered on wide screens */}
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 accent-dark"></div>

                <div className="space-y-6">
                  {session.events.map((event, eventIndex) => {
                    const isEven = eventIndex % 2 === 0;
                    return (
                      <div
                        key={eventIndex}
                        className={`relative flex md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                          }`}
                      >
                        {/* Timeline Dot - centered on wide screens */}
                        <div className="absolute -left-8 md:left-1/2 md:-translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full accent-dark border-4 border-white shadow-lg z-10"></div>

                        {/* Event Card */}
                        <div className={`bg-white rounded-lg p-6 w-full shadow-md border border-gray-200 hover:shadow-lg transition-shadow md:w-[calc(50%-2rem)] ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                          }`}>
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="text-dark font-bold text-md md:text-lg text-nowrap">{event.time}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-900 font-semibold text-md md:text-lg">{event.activity}</span>
                            </div>
                            {event.by && (
                              <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2 whitespace-pre-line">
                                {event.by}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
