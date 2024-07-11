import React from "react";

export const useScrolled = ({ threshold = 0, initial = false }) => {
  const [scrolled, setScrolled] = React.useState(initial);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // Function to handle scroll events
    setMounted(true);
    setScrolled(window.scrollY > threshold);
    function handleScroll() {
      // Check if the user has scrolled beyond the top of the page (scrollY > 0)
      setScrolled(window.scrollY > threshold);
    }
    // setScrolled(window.scrollY > threshold)
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array, so this effect runs only once

  return { scrolled, mounted };
};
