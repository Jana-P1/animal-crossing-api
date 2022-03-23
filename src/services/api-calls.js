const BASE_URL = 'http://acnhapi.com/v1'

export function getFossils() {
  return fetch (`${BASE_URL}/fossils`)
  .then(res => res.json())
}