import { Link, useLoaderData } from "react-router-dom";
import { logger } from "sequelize/lib/utils/logger";

export default function AllMoviesPage() {
  const { movies } = useLoaderData();

  const movieListItems = movies.map((movie) => (
    <li key={movie.movieId}>
      <Link to={`/movies/${movie.movieId}`}>{movie.title}</Link>
    </li>
  ));
  console.log(movieListItems);

  return (
    <>
      <h1>All Movies</h1>
      <ul>{movieListItems}</ul>
    </>
  );
}
