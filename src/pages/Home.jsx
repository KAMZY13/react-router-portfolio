import { Link } from "react-router-dom";
import profileImg from "../assets/profilepic.jpeg";

function Home() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white">

      {/*HERO SECTION\*/}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="flex justify-between items-center">

          {/* Hero Text */}
          <div>

            <p className="uppercase tracking-[0.3em] text-cyan-200 font-semibold">
              Frontend Developer
            </p>

            <h1 className="mt-5 text-6xl font-black leading-tight">
             Afolabi Samuel
            </h1>

            <p className="mt-4 text-xl text-blue-100 max-w-lg">
              Building modern web experiences with React,
              clean design and interactive interfaces.
            </p>

          </div>

          {/* Hero Icon*/}
          <div className="hidden lg:flex">

  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">

    <img
      src={profileImg}
      alt="Afolabi Samuel"
      className="w-full h-full object-cover"
    />

  </div>

</div>

        </div>

      </div>

      {/*QUICK STATS*/}
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">

          <div className="grid md:grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-black">
                2+
              </h2>

              <p className="text-blue-100 mt-2">
                Projects Completed
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black">
                React
              </h2>

              <p className="text-blue-100 mt-2">
                Primary Technology
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black">
                2026
              </h2>

              <p className="text-blue-100 mt-2">
                Portfolio Journey
              </p>

            </div>

          </div>

        </div>

      </div>

      {/*FEATURED PROJECTS*/}
      <div className="max-w-7xl mx-auto px-6 mt-24">

        {/* Section Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-200 font-semibold">
            My Work
          </p>

          <h2 className="mt-3 text-5xl font-black">
            Featured Projects
          </h2>

          <p className="mt-5 text-blue-100 max-w-2xl mx-auto">
            Here are some of the projects I've built while learning and
            growing as a frontend developer.
          </p>

        </div>

        {/* Project Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Project Card 1 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

            <span className="text-sm uppercase tracking-widest text-cyan-200">
              Project 01
            </span>

            <h3 className="mt-3 text-3xl font-bold">
              QSkill Translator
            </h3>

            <p className="mt-4 text-blue-100 leading-7">
              A multilingual translation web application built with React
              and RapidAPI, allowing users to translate text between
              multiple languages through a clean and responsive interface.
            </p>

            <Link
              to="/projects"
              className="inline-block mt-8 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              View Project →
            </Link>

          </div>

          {/* Project Card 2 */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

            <span className="text-sm uppercase tracking-widest text-cyan-200">
              Project 02
            </span>

            <h3 className="mt-3 text-3xl font-bold">
              Cipher
            </h3>

            <p className="mt-4 text-blue-100 leading-7">
              A customizable random string generator built with React
              Hooks, allowing users to generate secure passwords and
              random strings with adjustable options and one-click
              copying.
            </p>

            <Link
              to="/projects"
              className="inline-block mt-8 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
              View Project →
            </Link>

          </div>

        </div>

      </div>

      {/*CALL TO ACTION*/}
      <div className="max-w-7xl mx-auto px-6 mt-28 pb-20">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-10 py-16 text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-200 font-semibold">
            Let's Connect
          </p>

          <h2 className="mt-4 text-5xl font-black">
            Interested in working together?
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-blue-100 leading-8">
            I'm always excited to learn, collaborate and build meaningful
            web experiences. Whether it's an internship, freelance
            opportunity or simply a conversation about frontend
            development, I'd love to hear from you.
          </p>

          <div className="mt-10 flex justify-center gap-5">

            <Link
              to="/contact"
              className="bg-white text-indigo-700 font-bold px-8 py-4 rounded-xl hover:scale-105 transition"
            >
              Contact Me
            </Link>

            <Link
              to="/projects"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white/20 transition"
            >
              View Projects
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;