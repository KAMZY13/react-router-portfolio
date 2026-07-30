import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinkStyle = ({ isActive }) =>
    `px-5 py-2 rounded-full transition-all duration-300 font-medium ${
      isActive
        ? "bg-indigo-600 text-white shadow-lg"
        : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <NavLink
          to="/"
          className="text-3xl font-black tracking-tight text-slate-900"
        >
          Portfolio
        </NavLink>

        <div className="flex gap-3">

          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkStyle}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>

        </div>

      </nav>
    </header>
  );
}

export default Navbar;