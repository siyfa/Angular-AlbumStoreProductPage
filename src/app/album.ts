import { Track } from "./track";

export interface Album {
  name: string;
  releaseDate: String;
  coverImage: String;
  tracks: Track[];
}
