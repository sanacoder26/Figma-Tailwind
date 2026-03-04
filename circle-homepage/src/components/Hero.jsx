function Hero() {
  return (
    <section className="bg-teal-50 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          A powerful online engagement tool
          <br />
          that’s intuitive and simple to use
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          With Circle, bring your audience together, create discussions,
          and manage your community in one simple platform.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
            Get Started
          </button>

          <button className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-100">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;