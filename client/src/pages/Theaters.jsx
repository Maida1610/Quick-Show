import React, {
  useState,
} from "react";
import {
  MapPin,
  Search,
} from "lucide-react";

const Theaters = () => {
  const [
    search,
    setSearch,
  ] = useState("");

  const theaters = [
    {
      id: 1,
      name: "Cinepax Packages Mall",
      location:
        "Lahore, Pakistan",
      screens: 8,
    },

    {
      id: 2,
      name: "Universal Cinemas",
      location:
        "Lahore, Pakistan",
      screens: 6,
    },

    {
      id: 3,
      name: "CUE Cinema",
      location:
        "Lahore, Pakistan",
      screens: 5,
    },

    {
      id: 4,
      name: "CineStar IMAX",
      location:
        "Lahore, Pakistan",
      screens: 10,
    },

    {
      id: 5,
      name: "Super Cinema",
      location:
        "Karachi, Pakistan",
      screens: 7,
    },
  ];

  const filteredTheaters =
    theaters.filter(
      (theater) =>
        theater.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )
    );

  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 py-28 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Theaters
          </h1>

          <p className="text-gray-400 mt-2">
            Explore available
            cinemas near you.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-[#1C1C1C] border border-white/10 rounded-xl px-4 py-3 w-full md:w-[350px]">
          <Search className="w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search theater..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="bg-transparent outline-none ml-3 w-full text-white placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Theater Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {filteredTheaters.map(
          (theater) => (
            <div
              key={theater.id}
              className="bg-[#1C1C1C] border border-white/10 rounded-2xl p-6 hover:border-red-500 transition duration-300"
            >
              <h2 className="text-2xl font-semibold">
                {theater.name}
              </h2>

              <div className="flex items-center gap-2 text-gray-400 mt-3">
                <MapPin className="w-4 h-4" />

                <p>
                  {
                    theater.location
                  }
                </p>
              </div>

              <p className="text-gray-300 mt-4">
                Total Screens:{" "}
                {
                  theater.screens
                }
              </p>

              <button className="mt-5 bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl">
                View Details
              </button>
            </div>
          )
        )}
      </div>

      {/* Empty State */}
      {filteredTheaters.length ===
        0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-medium">
            No Theater Found
          </h2>

          <p className="text-gray-400 mt-2">
            Try another search.
          </p>
        </div>
      )}
    </div>
  );
};

export default Theaters;