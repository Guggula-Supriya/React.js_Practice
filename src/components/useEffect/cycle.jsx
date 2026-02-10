import { useEffect, useState } from "react";

function NewsApp() {
  const [news, setNews] = useState([]);
  const [refresh, setRefresh] = useState(0);

  // MOUNT + UPDATE (data load)
  useEffect(() => {
    console.log("Mounted / Updated");

    // simulate API call
    const apiTimer = setTimeout(() => {
      setNews([
        "Breaking: Heavy rain in city",
        "Sports: India won the match",
        "Tech: New AI model released",
      ]);
    }, 1000);

    return () => clearTimeout(apiTimer);
  }, [refresh]); // update when refresh changes

  // UNMOUNT (interval setup)
  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh((prev) => prev + 1);
    }, 5000);

    return () => {
      console.log("Component Unmounted");
      clearInterval(interval);
    };
  }, []); // only once

  return (
    <div>
      <h2>📰 Live News</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewsApp;
