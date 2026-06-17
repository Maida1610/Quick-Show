import React, {
  useState,
} from "react";
import {
  Calendar,
  Search,
} from "lucide-react";
import MovieCard from "../components/MovieCard";
import {
  dummyShowsData,
} from "../assets/assets";

const Releases = () => {
  const [
    search,
    setSearch,
  ] = useState("");

  // Filter latest movies
  const filteredMovies =
    dummyShowsData
      .filter(
        (movie) =>
          new Date(
            movie.release_date
          ).getFullYear() >=
          2023
      )
      .filter((movie) =>
        movie.title
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
          <div className="flex items-center gap-2">
            <Calendar className="text-red-500" />

            <h1 className="text-3xl md:text-4xl font-semibold">
              Latest Releases
            </h1>
          </div>

          <p className="text-gray-400 mt-2">
            Discover newly released
            movies and book tickets.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center bg-[#1C1C1C] border border-white/10 rounded-xl px-4 py-3 w-full md:w-[350px]">

          <Search className="w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search release..."
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

      {/* Movies Grid */}
      {filteredMovies.length >
      0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {filteredMovies.map(
            (movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            )
          )}
        </div>
      ) : (
        <div className="text-center py-28">
          <h2 className="text-2xl font-medium">
            No Releases Found
          </h2>

          <p className="text-gray-400 mt-2">
            Try another movie name.
          </p>
        </div>
      )}
    </div>
  );
};

export default Releases;