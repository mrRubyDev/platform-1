const API_HOST = process.env.REACT_APP_API_URL;

export const routes = {
  submitArtist: () => [API_HOST, "artists"].join("/"),
};
