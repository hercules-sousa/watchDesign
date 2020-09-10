import env from "../../environment";

export function getBackendAddress() {
  let { REACTPORT } = env;
  console.log(REACTPORT);
  return REACTPORT;
}

export function isThereConnectionWithAPI() {
  const { REACTPORT } = env;
  return fetch(`http://${REACTPORT}:3333/watches`);
}
