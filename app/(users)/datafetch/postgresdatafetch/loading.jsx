
export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950">

            {/* Loader */}
            <div className="relative h-16 w-16">

                <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>

                <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500"></div>

            </div>

            {/* Loading Text */}
            <h2 className="mt-6 text-xl font-semibold text-white">
                Loading...
            </h2>

            <p className="mt-2 text-sm text-gray-400">
                Please wait while we prepare your content.
            </p>

        </div>
    );
}
