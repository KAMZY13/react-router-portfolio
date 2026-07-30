import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-700 via-blue-600 to-cyan-500 text-white">

      <div className="text-center px-6">

        <div className="text-8xl">
          🚀
        </div>

        <h1 className="mt-6 text-7xl font-black">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold">
          Looks like you've wandered off the route.
        </p>

        <p className="mt-3 text-blue-100">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-10 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
        >
          ← Back Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;