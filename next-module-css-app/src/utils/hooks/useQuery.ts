import { useState, useEffect } from "react";

const useQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  const handleChange = (e) => setMatches(e.matches);

  useEffect(() => {
    const m = window.matchMedia(query);

    setMatches(m.matches);

    m.addEventListener("change", handleChange);

    return () => {
      m.removeEventListener("change", handleChange);
    };
  }, []);

  return !matches;
};

//Example

/* const Menu= () => {
    const isMobile = useQuery("(min-width: 768px)");
  } */

export default useQuery;
