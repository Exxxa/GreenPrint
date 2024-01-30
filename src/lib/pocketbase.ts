import PocketBase from 'pocketbase'

export function createInstance() {
  const PUBLIC_POCKETBASE_URL = "https://anotherhadi.com"
  return new PocketBase(PUBLIC_POCKETBASE_URL)
}

export const pb = createInstance()
