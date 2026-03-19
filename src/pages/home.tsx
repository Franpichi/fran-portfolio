import profile from "../assets/profile.png";

const Home = () => {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-12 py-20">
      
      {/* TEXT */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I design and build
          <span className="text-accent block">digital products</span>
        </h1>

        <p className="mt-6 text-lg text-textSecondary">
          Developer, designer and strategist focused on building products that
          actually solve problems and scale.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="bg-accent px-6 py-3 rounded-xl font-semibold hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-6 py-3 rounded-xl hover:border-accent"
          >
            Contact
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative">
        <div className="w-[280px] md:w-[360px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={profile}
            alt="Fran"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute -inset-1 bg-accent opacity-20 blur-2xl rounded-2xl -z-10" />
      </div>
    </section>
  );
};

export default Home;
