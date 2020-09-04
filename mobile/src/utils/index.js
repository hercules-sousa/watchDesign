import env from "../../environment";

export function getBackendAddress() {
  let { REACTPORT } = env;
  console.log(REACTPORT);
  return REACTPORT;
}
