const BASE_URL = 'https://acnhapi.com/v1a'

export function getFossils() {
  return fetch (`${BASE_URL}/fossils`)
  .then(res => res.json())
}

export function getVillagers() {
  return fetch (`${BASE_URL}/villagers`)
  .then(res => res.json())
}