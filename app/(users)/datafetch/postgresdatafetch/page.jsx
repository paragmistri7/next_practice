"use client";
import { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    try {
      fetch("/api/users")
        .then((response) => {
          console.log("Response:", response);
          return response.json();
        })
        .then((data) => {
          setData(data.data);
        });
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg">
        <table className="w-full min-w-[1000px] text-left text-sm text-gray-600">
          <caption className="border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-gray-800">
                Users Data
                <span className="ml-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {data.length} Users
                </span>
              </div>

              <button
                onClick={fetchData}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
              >
                <span>↻</span>
                Refresh
              </button>
            </div>
          </caption>

          <thead className="bg-gray-900 text-xs uppercase tracking-wider text-white">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Age</th>
              <th className="px-6 py-4">City</th>
              <th className="px-6 py-4">Created At</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((user) => (
                <tr
                  key={user.id}
                  className="transition-colors odd:bg-white even:bg-gray-50 hover:bg-blue-50"
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {user.name}
                  </td>

                  <td className="px-6 py-4">{user.email}</td>

                  <td className="px-6 py-4">{user.phone}</td>

                  <td className="px-6 py-4">{user.age}</td>

                  <td className="px-6 py-4">
                    <span className="rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-700">
                      {user.city}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                    {user.created_at
                      ? new Date(user.created_at).toLocaleDateString("en-IN")
                      : "-"}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      {/* Edit Button */}
                      <button
                        onClick={() => console.log("Edit User:", user)}
                        className="rounded-lg bg-amber-100 px-3 py-2 text-xs font-semibold text-amber-700 transition hover:bg-amber-200"
                      >
                        ✏️ Edit
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => console.log("Delete User:", user.id)}
                        className="rounded-lg bg-red-100 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-200"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-10 text-center text-gray-400"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataFetching;
