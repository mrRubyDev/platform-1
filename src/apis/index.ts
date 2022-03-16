import { IArtist } from "types";
import { POST, checkError, toJson } from "../utils";
import { routes } from "./routes";

export const submitArtist = (artist: IArtist) => {
  return POST(routes.submitArtist(), artist).then(checkError).then(toJson);
};

export const fetchNftData = (url: string) => {
  return fetch(url).then(checkError).then(toJson);
}