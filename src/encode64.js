import { Buffer } from "buffer";

export function encode64(dato) {
  return Buffer.from(String(dato), "utf8").toString("base64");
}
