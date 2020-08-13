import Constants from 'expo-constants'
const { manifest } = Constants

export function getLocalHost() {
  const localHost = manifest.hostUri.split(":")[0]
  return localHost
}