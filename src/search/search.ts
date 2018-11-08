import { ItunesResult } from "../result/result";
import { ItunesSearchOptions } from "./search-options";

export const itunesSearchRoot = "https://itunes.apple.com/search";

export function searchItunes(
  options: ItunesSearchOptions
): Promise<ItunesResult> {
  return new Promise((resolve, reject) => {
    const phin = require("phin");

    phin(`${itunesSearchRoot}?${options.toURI()}`, (err: any, res: any) => {
      if (err) {
        reject(err);
      } else {
        res.body = JSON.parse(res.body);
        resolve(ItunesResult.from(res.body));
      }
    });
  });
}
