"use client";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const handleSave = () => {
    if (!text.trim()) {
      alert("Please enter some text");
      return;
    }

    console.log("Saved:", text);
    alert("Saved successfully!");
  };

  return (
    <div className=" bg-gray-100 flex flex-col">
      <main className="flex-1 p-6">
        <div className="max-w-xl mx-auto bg-white rounded-xl p-6 shadow-sm">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter Text
          </label>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter something..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="w-30 my-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold p-1 rounded-lg transition duration-200"
            >
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
