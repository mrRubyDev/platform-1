const API_HOST =
  process.env.REACT_APP_ENV === "staging"
    ? process.env.REACT_APP_API_URL_STAGING
    : process.env.REACT_APP_API_URL_PROD;

export const routes = {
  submitArtist: () => [API_HOST, "artists"].join("/"),
};
