import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const PageLoadingIndex = ({ pageLoading }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const first = useRef(true);

  // Handle route changes
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.key]);

  // Handle manual triggers
  useEffect(() => {
    if (!pageLoading) return; // only run when pageLoading is true

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pageLoading]);

  if (!loading) return null;

  return (
    <div className="page-loader">
      Loading...
    </div>
  );
};

export default PageLoadingIndex;
