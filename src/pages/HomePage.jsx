import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { data, error, loading } = useFetch(
    "http://localhost:1337/api/reviews"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <section className='App'>
      {data.data.map((review) => {
        return (
          <div className='review-card' key={review.id}>
            <div className='rating'>{review.attributes.rating}</div>
            <h2>{review.attributes.title}</h2>
            <small>console list</small>
            <p>{review.attributes.body.substring(0, 200)}...</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        );
      })}
    </section>
  );
}
