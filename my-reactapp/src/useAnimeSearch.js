import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAnimeSearch(pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [animeList, setAnimeList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: `https://api.jikan.moe/v3/top/anime/${pageNumber}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setAnimeList((prevAnime) => {
          return [
            ...new Set([
              ...prevAnime,
              ...res.data.top.map((b) => ({
                image_url: b.image_url,
                title: b.title,
              })),
            ]),
          ];
        });
        setHasMore(res.data.top.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [pageNumber]);

  return { loading, error, animeList, hasMore };
}
