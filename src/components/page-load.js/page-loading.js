import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ClockLoader from "react-spinners/ClockLoader";

const PageLoading = () => {

  const location = useLocation();

  const pageLoadings = useSelector((state) => state.loadingReducer.pageLoading); // get from Redux

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

  // handle Redux trigger
  useEffect(() => {
    if (!pageLoadings) return;

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pageLoadings]);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <ClockLoader color="#ff4500" loading={true} size={60} />
    </div>
  );
};

export default PageLoading;
