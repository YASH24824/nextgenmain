"use client";

const Address = () => {
  const offices = [
    {
      title: "Head Office",
      address: "Silver Redience-2, Science City Road, Opp, Empire Business House, Sola, Ahmedabad, Ahmedabad, Gujarat, India, 380060",
      mapLink: "#"
    },
    {
      title: "Ahmedabad Office", 
      address: "Sadbhav Complex 41, Drive In Rd, Big Bazar, nr. Himalaya Mall Commercial Building, Ahmedabad, Gujarat 380052",
      mapLink: "#"
    },
    {
      title: "Surat Office",
      address: "9th Floor, APMC Krushi Bazaar, 901 to 910, Ring Rd, beside North Extension, Sahara Darwaja, Begampura, Surat, Gujarat 395003",
      mapLink: "#"
    }
  ];

  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offices.map((office, index) => (
            <div key={index} className="bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] rounded-2xl shadow-lg border-2 border-blue-200 p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {/* Map Pin Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              
              {/* Office Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {office.title}
              </h3>
              
              {/* Address */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                {office.address}
              </p>
              
              {/* See on Map Button */}
              <a 
                href={office.mapLink}
                className="inline-flex items-center justify-center bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-300"
              >
                See on Map →
              </a>
            </div>
          ))}
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Business Hours */}
          <div className="bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] rounded-2xl shadow-lg border-2 border-blue-200 p-8 text-center">
            {/* Clock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
            </div>
            
            <div className="text-gray-800">
              <p className="font-semibold text-lg mb-2">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            {/* Phone */}
            <div className="bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] rounded-2xl shadow-lg border-2 border-blue-200 p-6 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <span className="text-gray-700 font-medium">+91 98982 98149</span>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] rounded-2xl shadow-lg border-2 border-blue-200 p-6 flex items-center">
              <div className="w-12 h-12 bg-gradient-to-b from-[#245586] to-[#76a5d3] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <a 
                href="mailto:support@nextgenbusiness.com"
                className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                support@nextgenbusiness.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;