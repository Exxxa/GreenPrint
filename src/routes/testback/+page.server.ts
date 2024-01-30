import { pb } from "$lib/pocketbase";

/** @type {import('./$types').LayoutServerLoad} */
export async function load() {
  return {
    user: pb.authStore.model,
    ideas: await pb.collection('idea').getList(1, 10), // Récup une liste par page
  }
}
