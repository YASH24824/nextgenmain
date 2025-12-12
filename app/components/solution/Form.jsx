const Form = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-semibold text-[#05325f] text-3xl md:text-[46.6px] mb-4">
            Get started with today
          </h2>
          <p className="text-[#64748b] text-lg md:text-xl max-w-2xl mx-auto">
            We help you shape your vision into bold, practical action.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-7xl mx-auto bg-gradient-to-b from-[#e8f4ff] to-[#e8f4ff] p-8 md:p-12">
  <div className="space-y-6">
    {/* First Row - Name and Mobile No. */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <input
          type="text"
          className="w-full px-4 py-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg"
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="tel"
          className="w-full px-4 py-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg"
          placeholder="Mobile No."
        />
      </div>
    </div>

    {/* Second Row - Company and E-Mail */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <input
          type="text"
          className="w-full px-4 py-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg"
          placeholder="Company"
        />
      </div>
      <div>
        <input
          type="email"
          className="w-full px-4 py-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a90e2] focus:border-transparent text-[#64748b] shadow-lg"
          placeholder="E-Mail"
        />
      </div>
    </div>

    {/* Send Message Button */}
    <div className="pt-4">
      <button
        type="button"
        className="w-full px-8 py-4 bg-gradient-to-b from-[#245586] to-[#76a5d3] text-white font-semibold rounded-lg hover:from-[#1e456f] hover:to-[#3a7ac2] transition-all duration-300 text-lg"
      >
        Send Message
      </button>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Form;