import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// 暫時直接操作 window，排除 utils 引用問題
// import { pushToDataLayer } from "../utils/gtm";

export default function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
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
