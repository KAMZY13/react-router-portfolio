function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="text-2xl font-black text-white">
            Portfolio
          </h2>

          <p className="mt-2 text-slate-400">
            Modern client-side routing with React Router DOM.
          </p>

        </div>

        <div className="text-sm text-slate-500">
          © 2026 Samuel. Built with React, Tailwind CSS & React Router.
        </div>

      </div>
    </footer>
  );
}

export default Footer;