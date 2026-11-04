"use client";

import { useActionState } from "react";
import { contactAction } from "./contact.action";

const Contact = () => {
  const [state, formAction, isPending] = useActionState(contactAction, null);

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-500 mb-6">Please fill out the form below.</p>

        <form className="space-y-5" action={formAction}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              rows="4"
              name="description"
              placeholder="Write your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
          {state?.message && (
            <p
              role={state.success ? "status" : "alert"}
              className={state.success ? "text-green-700" : "text-red-700"}
            >
              {state.message}
            </p>
          )}
        </form>
      </div>
    </div>

    // <div className="bg-red-500 border-5 border-black m-5 relative">
    //   <Image
    //     src="/bird.jpg"
    //     alt="Bird"
    //     width={300}
    //     height={500}
    //     // fill
    //     quality={100}
    //     placeholder="blur"
    //     blurDataURL="/bird.jpg"
    //   />
    // </div>
  );
};

export default Contact;
