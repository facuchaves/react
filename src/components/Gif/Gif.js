import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ title, id, img_url }) {
  return (
    <Link to={`/gif-info/${id}`} className="GifContainer">
      <div className="GifTitle">{title}</div>
      <div className="GifId">{id}</div>
      <img loading="lazy" alt={title} src={img_url} />
    </Link>
  );
}

export default React.memo(Gif);
