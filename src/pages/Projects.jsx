import { Link } from "react-router-dom";
import translatorImg from "../assets/translator.jpeg";
import cipherImg from "../assets/cipher.jpeg";
function Projects() {
  return (
    <section className="min-h-screen bg-slate-50">

      {/* Hero */}
      <div className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white">

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-200 font-semibold">
            Portfolio
          </p>

          <h1 className="mt-4 text-6xl font-black">
            My Projects
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            A collection of projects I've built while improving my frontend
            development skills using React and modern web technologies.
          </p>

        </div>

      </div>

      {/* Projects */}
      
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-10">

  {/* PROJECT 01 */}
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2">

    {/* Project Preview */}
    <div className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center min-h-[320px]">

     <img
      src={translatorImg}
      alt="QSkill Translator"
      className="w-full h-full object-cover"
     />

    </div>

    {/* Project Information */}
    <div className="p-10">

      <p className="uppercase tracking-widest text-indigo-600 font-semibold">
        Project 01
      </p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        QSkill Translator
      </h2>

      <div className="flex flex-wrap gap-3 mt-5">

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          RapidAPI
        </span>

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
          CSS
        </span>

      </div>

      <p className="mt-6 text-slate-600 leading-8">
        A multilingual translation application that allows users to
        translate text between multiple languages using RapidAPI.
        The project focuses on responsive design, clean UI and
        reusable React components.
      </p>

      <div className="mt-8 flex gap-4">

        <a
          href="https://github.com/KAMZY13/Qskill-Translator"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          GitHub
        </a>

        <a
          href="https://qskill-translator.vercel.app"
          className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Live Demo
        </a>

      </div>

    </div>

  </div>

  {/*PROJECT 02*/}
  <div className="bg-white rounded-3xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2">

    {/* Project Information */}
    <div className="p-10">

      <p className="uppercase tracking-widest text-indigo-600 font-semibold">
        Project 02
      </p>

      <h2 className="mt-3 text-4xl font-black text-slate-900">
        Cipher
      </h2>

      <div className="flex flex-wrap gap-3 mt-5">

        <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
          React
        </span>

        <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
          Tailwind CSS
        </span>

        <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm">
          Hooks
        </span>

      </div>

      <p className="mt-6 text-slate-600 leading-8">
        A customizable random string generator capable of producing
        secure passwords and random strings with adjustable settings
        and one-click clipboard copying.
      </p>

      <div className="mt-8 flex gap-4">

        <a
          href="https://github.com/KAMZY13/cipher-string-generator"
          className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          GitHub
        </a>

        <a
          href="https://cipher-string-generator.vercel.app"
          className="border border-slate-300 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100 transition"
        >
          Live Demo
        </a>

      </div>

    </div>

    {/* Project Preview */}
    <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center min-h-[320px]">

      <img
      src={cipherImg}
      alt="Cipher"
      className="w-full h-full object-cover"
     />

    </div>

  </div>

  {/* MORE PROJECTS */}
  <div className="rounded-3xl border-2 border-dashed border-slate-300 p-16 text-center">

    <h2 className="text-3xl font-black text-slate-800">
      More Projects Coming Soon 
    </h2>

    <p className="mt-5 text-slate-600 max-w-xl mx-auto">
      I'm continuously learning and building new applications.
      This portfolio will keep growing as I complete more projects.
    </p>

  </div>

</div>

    </section>
  );
}

export default Projects;