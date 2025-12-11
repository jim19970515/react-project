import ReactGA from "react-ga4";

export const initGA4 = () => {
  ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
};
