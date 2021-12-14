import React, { useState, useRef, useCallback } from 'react';
import useAnimeSearch from './useAnimeSearch';
import './App.css';
export default function App() {
  const [pageNumber, setPageNumber] = useState(1);

  const { animeList, hasMore, loading, error } = useAnimeSearch(pageNumber);

  const observer = useRef();
  const lastAnimeElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="animeList">
      {animeList.map((anime, index) => {
        if (animeList.length === index + 1) {
          return (
            <div ref={lastAnimeElementRef} className="singleAnime" key={anime}>
              <img src={anime.image_url} />
              <p>{anime.title}</p>
            </div>
          );
        } else {
          return (
            <div className="singleAnime" key={anime}>
              <img src={anime.image_url} />
              <p>{anime.title}</p>
            </div>
          );
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}
