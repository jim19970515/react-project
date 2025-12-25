import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pushToDataLayer } from "../utils/gtm";

export default function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    pushToDataLayer({
      event: "pageview",
      page: {
        path: location.pathname,
        search: location.search,
        hash: location.hash,
        referrer: document.referrer,
      },
    });
  }, [location]);

  return null;
}
