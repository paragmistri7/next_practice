import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full text-center bg-white p-10 rounded-2xl shadow-lg">
        {/* Error Icon */}
        <div className="text-7xl mb-5">⚠️</div>

        {/* Error Code */}
        <h1 className="text-7xl font-bold text-red-500 mb-4">Oops!</h1>

        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Something went wrong!
        </h2>

        <p className="text-gray-500 mb-8">
          We apologize for the inconvenience. Please try again later.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg transition"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
