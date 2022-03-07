import { IArtist } from "types";
import { POST, checkError, toJson } from "../utils/apiUtils";
import { routes } from "./routes";

export const submitArtist = (artist: IArtist) => {
  return POST(routes.submitArtist(), artist).then(checkError).then(toJson);
};
