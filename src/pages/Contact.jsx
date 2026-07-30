function Contact() {
  return (
    <section className="min-h-screen bg-slate-50">

      {/* =========================
          HERO
      ========================== */}
      <div className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 text-white">

        <div className="max-w-6xl mx-auto px-6 py-24 text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-200 font-semibold">
            Contact
          </p>

          <h1 className="mt-4 text-6xl font-black">
            Let's Connect
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            Have an opportunity, collaboration or simply want to say hello?
            I'd love to hear from you.
          </p>

        </div>

      </div>

      {/* =========================
          CONTACT SECTION
      ========================== */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* Contact Information */}
        <div>

          <h2 className="text-4xl font-black text-slate-900">
            Get In Touch
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Feel free to reach out for internships, collaborations or
            frontend development opportunities.
          </p>

          <div className="mt-10 space-y-6">

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-slate-900">
                📧 Email
              </h3>

              <p className="mt-2 text-slate-600">
                afolabioluwakamiye52@gmail.com
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-slate-900">
                💻 GitHub
              </h3>

              <p className="mt-2 text-slate-600">
                github.com/KAMZY13
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-bold text-slate-900">
                📍 Location
              </h3>

              <p className="mt-2 text-slate-600">
                Lagos, Nigeria
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-3xl font-black text-slate-900">
            Send a Message
          </h2>

          <form className="mt-8 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white py-4 rounded-xl font-bold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;