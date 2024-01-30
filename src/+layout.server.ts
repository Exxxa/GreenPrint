import { pb } from "$lib/pocketbase"

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return {
    user: pb.authStore,
  }
}
