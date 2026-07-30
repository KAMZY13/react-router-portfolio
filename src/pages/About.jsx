function About() {
  return (
    <section className="min-h-screen bg-slate-50">

      {/*HERO*/}
      <div className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white">

        <div className="max-w-6xl mx-auto px-6 py-24 text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-200 font-semibold">
            About Me
          </p>

          <h1 className="mt-4 text-6xl font-black">
            My Journey
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            I'm passionate about creating modern, responsive and
            user-friendly web applications while constantly improving
            my frontend development skills.
          </p>

        </div>

      </div>

      {/*ABOUT CONTENT*/}
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>

          <h2 className="text-4xl font-black text-slate-900">
            Hi, I'm Samuel 👋
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            I'm a Computer Science student with a passion for frontend
            development. I enjoy transforming ideas into modern,
            responsive and interactive web experiences using React and
            other modern web technologies.
          </p>

          <p className="mt-6 text-slate-600 leading-8">
            Every project I build helps me improve my problem-solving,
            coding practices and understanding of how great user
            experiences are created.
          </p>

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Skills & Technologies
          </h3>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              HTML
            </span>

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              CSS
            </span>

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              JavaScript
            </span>

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              React
            </span>

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              Tailwind CSS
            </span>

            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              Git & GitHub
            </span>

          </div>

          <hr className="my-8" />

          <h3 className="text-2xl font-bold text-slate-900">
            Currently
          </h3>

          <p className="mt-4 text-slate-600 leading-8">
            🌱 Learning more about React, frontend architecture and
            building projects that solve real-world problems.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;