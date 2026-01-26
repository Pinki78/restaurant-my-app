import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";

const PageLoading = ({ pageLoading }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const first = useRef(true);

  // handle route changes
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location.key]);

  // handle manual trigger
  useEffect(() => {
    if (!pageLoading) return;

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pageLoading]);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <ClockLoader color="#ff4500" loading={true} size={60} />
    </div>
  );
};

export default PageLoading;
