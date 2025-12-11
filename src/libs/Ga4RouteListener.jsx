import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function Ga4RouteListener() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview", //hitType 事件種類 pageview 頁面瀏覽
      page: location.pathname + location.search,
      title: document.title
    });
  }, [location]);
  return null;
}
