export const pushToDataLayer = (payload) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
};
