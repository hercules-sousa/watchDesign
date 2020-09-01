import env from "../../environment";

export function getBackendAddress() {
  let { REACTPORT } = env;
  return REACTPORT;
}
