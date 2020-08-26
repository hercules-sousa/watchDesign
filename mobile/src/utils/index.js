export function getLocalHost() {
  const localHost = process.env.developingReactPort
  console.log(`Porta local ${localHost}`)
  return localHost;
}