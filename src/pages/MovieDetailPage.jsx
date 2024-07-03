import { useLoaderData } from "react-router-dom";

export default function MovieDetailPage() {
  const {
    movie: { title, posterPath, overview, releaseDate },
  } = useLoaderData();

  const releaseDatePretty = releaseDate
    .split("")
    .slice(0, 10)
    .join("")
    .split("-");

  const months = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>
        {months[releaseDatePretty[1]]} {releaseDatePretty[2]}{" "}
        {releaseDatePretty[0]}
      </h2>
      <img src={posterPath} alt={title} style={{ width: "200px" }} />
      <p>{overview}</p>
    </>
  );
}
